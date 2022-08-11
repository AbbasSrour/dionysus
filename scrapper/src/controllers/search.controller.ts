import {NextFunction, Request, Response} from "express";
import {
  content,
  content_id,
  getActors,
  getDirectors,
  getGenres,
  getImdbData,
  getImdbPage,
  getLanguages,
  getMovieData,
  getStudios,
  getWriters,
  map_shows,
} from "../utils/scraper.util";
import {createMovieService} from "../services/movie.service";
import AppError from "../errors/app.error";
import {createImdbService, getImdbService} from "../services/imdb.service";
import log from "../utils/logger.util";
import {createDirectorService, createMovieDirector, getDirectorService,} from "../services/director.service";
import {createActorService, createMovieCastService, getActorService,} from "../services/actor.service";
import {
  createLanguageService,
  createMovieLanguageService,
  getLanguageByNameService,
} from "../services/language.service";
import {createMovieServerService, createServerService, getServerService,} from "../services/server.service";
import {createGenreService, createMovieGenreService, getGenreService,} from "../services/genre.service";
import {createMovieStudioService, createStudioService, getSudioService,} from "../services/studio.service";
import {createMovieWriterService, createWriterService, getWriterService,} from "../services/writer.service";

// TODO: Needs a lot of rethinking for async error handling
// TODO: Refactor some more because this is fucking blocking everything with one hundred awaits use promise.all
export const SearchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.body;
  let movies = [];
  try {
    //////////////////////////////////////////Sync 1////////////////////////////////////////////////////
    const showList = await map_shows(searchTerm);

    for (let i = 0; i < showList.length; i++) {
      let serverId = await content_id(showList[i]);
      if (serverId === "No Server Id Found") {
        showList.splice(i, 1);
        i--;
        continue;
      }

      const imdbId = showList[i];
      const imdbPage = await getImdbPage(imdbId).catch((error) => {
        throw new AppError(
          500,
          `Couldn't load imdb page for movie ${movieData.name} with ${imdbId} imdb id`
        );
      });
      const imdbData = await createImdbService(
        await getImdbData(imdbPage, imdbId)
      ).catch((error) => getImdbService(imdbId));
      if (!imdbData) continue;

      const movieData = await getMovieData(imdbPage, imdbId).catch((error) => {
        throw new AppError(
          500,
          `Couldn't get movie ${movieData.name} with ${imdbId} imdb id data`
        );
      });
      const movie = await createMovieService(movieData).catch((error) => {
        log.error(error);
        return null;
      });
      if (!movie) continue;

      //////////////////////////////////////////Sync 2////////////////////////////////////////////////////
      const server = content(serverId)
        .then((serverInfo) =>
          getServerService(serverInfo.name)
            .catch((error) =>
              createServerService({
                name: serverInfo.name,
                url: serverInfo.url,
              })
            )
            .then((server) => {
              createMovieServerService({
                serverId: server.serverId,
                movieId: movie.movieId,
                url: serverInfo.movieUrl,
              });
              return { ...server, movieUrl: serverInfo.movieUrl };
            })
        )
        .catch((error) => log.error(error));

      const languages: any[] = [];
      getLanguages(imdbPage)
        .then((data) =>
          data.forEach((language) =>
            getLanguageByNameService(language.name)
              .catch((error) => createLanguageService(language))
              .then((language) => {
                languages.push(language);
                createMovieLanguageService({
                  languageId: language.languageId,
                  movieId: movie.movieId,
                });
              })
              .catch((error) => log.error(error))
          )
        )
        .catch((err) => log.error(err));

      const actors = [];
      getActors(imdbPage)
        .then((data) =>
          data.forEach((data) => {
            getActorService({ name: data.name, image: data.image })
              .catch(() => createActorService(data))
              .then((actor) => {
                actors.push({ ...actor, role: data.role });
                createMovieCastService({
                  movieId: movie.movieId,
                  actorId: actor.actorId,
                  role: data.role,
                });
              })
              .catch((err) => log.error(err));
          })
        )
        .catch((err) => log.error(err));

      const directors = [];
      getDirectors(imdbPage)
        .then((data) =>
          data.forEach((director) => {
            getDirectorService(director)
              .catch((error) => createDirectorService(director))
              .then((director) => {
                directors.push(director);
                createMovieDirector({
                  directorId: director.directorId,
                  movieId: movie.movieId,
                });
              })
              .catch((error) => log.error(error));
          })
        )
        .catch((error) => {
          log.error(error);
        });

      const genres = [];
      getGenres(imdbPage)
        .then((data) =>
          data.forEach((genre) =>
            getGenreService(genre)
              .catch((error) => createGenreService(genre))
              .then((genre) => {
                genres.push(genre);
                createMovieGenreService({
                  genreId: genre.genreId,
                  movieId: movie.movieId,
                });
              })
              .catch((error) => log.error(error))
          )
        )
        .catch((error) => log.error(error));

      const studios = [];
      getStudios(imdbPage)
        .then((data) =>
          data.forEach((studio) =>
            getSudioService(studio)
              .catch((error) => createStudioService(studio))
              .then((studio) => {
                studios.push(studio);
                createMovieStudioService({
                  studioId: studio.studioId,
                  movieId: movie.movieId,
                }).catch((error) => log.error(error));
              })
          )
        )
        .catch((error) => log.error(error));

      const writers = [];
      const writerData = await getWriters(imdbPage)
        .then((data) =>
          data.forEach((writer) =>
            getWriterService(writer)
              .catch((error) => createWriterService(writer))
              .then((writer) => {
                writers.push(writer);
                createMovieWriterService({
                  movieId: movie.movieId,
                  writerId: writer.writerId,
                }).catch((error) => log.error(error.stack));
              })
          )
        )
        .catch((error) => log.error(error));

      const d = Promise.all([
        server,
        languages,
        genres,
        directors,
        actors,
        writers,
        studios,
      ]);
      const responseData = {
        movie: await movie,
        server: await server,
        genres: await genres,
        actors: await actors,
        directors: await directors,
        writers: await writers,
        studios: await studios,
      };
      movies.push(responseData);
    }
    res.status(200).json({
      status: "success",
      data: {
        message: "The movie was inserted successfully",
        movies,
      },
    });
  } catch (error: any) {
    next(error);
  }
};
