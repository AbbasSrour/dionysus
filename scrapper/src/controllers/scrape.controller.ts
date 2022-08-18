import { NextFunction, Request, Response } from "express";
import log from "../utils/logger.util";
import { createDirectorService, createMovieDirector, getDirectorService } from "../services/director.service";
import { createActorService, createShowCastService, getActorService } from "../services/actor.service";
import { createLanguageService, createShowLanguageService, getLanguageService } from "../services/language.service";
import { createMovieServerService, createServerService, getServerService } from "../services/server.service";
import { createGenreService, createMovieGenreService, getGenreService } from "../services/genre.service";
import { createMovieStudioService, createStudioService, getStudioService } from "../services/studio.service";
import { createShowWriterService, createWriterService, getWriterService } from "../services/writer.service";
import { getImdbShowPage, SearchImdb } from "../utils/imdb.util";
import { membedServer } from "../scrape/server.scrape";
import { scrapeShowFromImdb } from "../scrape/show.scrape";
import { createShowService, getShowService } from "../services/show.service";
import { scrapeImdbShowData } from "../scrape/imdb.scrape";
import { createImdbService, getImdbService } from "../services/imdb.service";
import { scrapeMovieFromImdb } from "../scrape/movie.scrape";
import { createMovieService, getMovieService } from "../services/movie.service";
import { LanguageSchema } from "../schemas/language.schema";
import { scrapeLanguagesFromImdb } from "../scrape/language.scrape";
import { scrapeActorsFromImdb } from "../scrape/actor.scrape";
import { scrapeDirectorFromImdb } from "../scrape/director.scrape";
import { DirectorInput } from "../schemas/director.schema";
import { GenreSchema } from "../schemas/genre.schema";
import { scrapeGenresFromImdb } from "../scrape/genre.scrape";
import { StudioSchema } from "../schemas/studio.schema";
import { scrapeStudiosFromImdb } from "../scrape/studio.scrape";
import { WriterSchema } from "../schemas/writer.schema";
import { scrapeWritersFromImdb } from "../scrape/writer.scrape";

// TODO: Needs a lot of rethinking for async error handling
// TODO: Refactor some more because this is fucking blocking everything with one hundred awaits use promise.all
// Todo: Better Error Management
export const ScrapeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm, imdbId } = req.body;
  let shows = new Array<object>();
  try {
    //////////////////////////////////////////Sync 1////////////////////////////////////////////////////
    let showList = new Array<string>();
    if (imdbId) showList.push(imdbId);
    else showList = await SearchImdb(searchTerm);

    for (let i = 0; i < showList.length; i++) {
      // Todo: Promise.all both to make it faster
      const membed = await membedServer(showList[i]).catch((error) => {
        log.error(error);
        return null;
      });
      const imdbPage = await getImdbShowPage(showList[i]).catch((error) => {
        log.error(error);
        return null;
      });

      if (membed === null || imdbPage === null) {
        showList.splice(i, 1);
        i--;
        continue;
      }

      const show = await scrapeShowFromImdb(imdbPage).then(
        (data) =>
          getShowService({
            name: data.name,
            releaseYear: data.releaseYear,
          })
            .catch((error) => {
              log.error(error);
              return createShowService(data);
            })
            .catch((error) => {
              log.error(error);
              return null;
            }),
        (error) => {
          log.error(error);
          return null;
        }
      );
      if (!show) continue;

      const movie = await scrapeMovieFromImdb(imdbPage).then((data) =>
        getMovieService({ showId: show.showId }).catch((error) =>
          createMovieService({
            showId: show.showId,
            length: data.length,
          })
        )
      );

      if (!movie) continue;

      //////////////////////////////////////////Sync 2////////////////////////////////////////////////////
      const server = getServerService(membed.name)
        .catch((error) => {
          return createServerService({
            name: membed.name,
            url: membed.url,
          });
        })
        .then((server) =>
          createMovieServerService({
            movieId: movie.movieId,
            serverId: server.serverId,
            url: membed.movieUrl,
          })
        )
        .catch((error) => {
          log.error(error);
          return null;
        });

      const imdb = scrapeImdbShowData(imdbPage).then((data) =>
        getImdbService(showList[i]).catch((error) => {
          log.error(error);
          return createImdbService({
            imdbId: showList[i],
            showId: show.showId,
            voteCount: data.voteCount,
            rating: data.rating,
          }).catch((error) => {
            log.error(error);
            return null;
          });
        })
      );

      const languages = new Array<LanguageSchema>();
      scrapeLanguagesFromImdb(imdbPage)
        .then((data) =>
          data.forEach((language) =>
            getLanguageService(language.name)
              .catch((error) => createLanguageService(language))
              .then((language) => {
                languages.push(language);
                return createShowLanguageService({
                  languageId: language.languageId,
                  showId: show.showId,
                });
              })
              .catch((error) => log.error(error))
          )
        )
        .catch((err) => log.error(err));

      const actors = new Array<{
        name: string;
        image: string;
        role: string;
        actorId: number;
      }>();
      scrapeActorsFromImdb(imdbPage)
        .then((data) =>
          data.forEach((data) => {
            getActorService({ name: data.name, image: data.image })
              .catch(() => createActorService(data))
              .then(
                (actor) => {
                  actors.push({
                    actorId: actor.actorId,
                    name: actor.name,
                    image: actor.image,
                    role: data.role,
                  });
                  createShowCastService({
                    showId: movie.movieId,
                    actorId: actor.actorId,
                    role: data.role,
                  }).catch((error) => log.error(error));
                },
                (error) => log.error(error)
              );
          })
        )
        .catch((err) => log.error(err));

      const directors = new Array<DirectorInput>();
      scrapeDirectorFromImdb(imdbPage)
        .then((data) =>
          data.forEach((director) => {
            getDirectorService(director)
              .catch((error) => createDirectorService(director))
              .then((director) => {
                directors.push(director);
                createMovieDirector({
                  directorId: director.directorId,
                  showId: show.showId,
                });
              })
              .catch((error) => log.error(error));
          })
        )
        .catch((error) => {
          log.error(error);
        });

      const genres = new Array<GenreSchema>();
      scrapeGenresFromImdb(imdbPage)
        .then((data) =>
          data.forEach((genre) =>
            getGenreService(genre)
              .catch((error) => createGenreService(genre))
              .then((genre) => {
                genres.push(genre);
                createMovieGenreService({
                  genreId: genre.genreId,
                  showId: show.showId,
                });
              })
              .catch((error) => log.error(error))
          )
        )
        .catch((error) => log.error(error));

      const studios = new Array<StudioSchema>();
      scrapeStudiosFromImdb(imdbPage)
        .then((data) =>
          data.forEach((studio) =>
            getStudioService(studio)
              .catch((error) => createStudioService(studio))
              .then((studio) => {
                studios.push(studio);
                createMovieStudioService({
                  studioId: studio.studioId,
                  showId: show.showId,
                }).catch((error) => log.error(error));
              })
          )
        )
        .catch((error) => log.error(error));

      const writers = new Array<WriterSchema>();
      const writerData = await scrapeWritersFromImdb(imdbPage)
        .then((data) =>
          data.forEach((writer) =>
            getWriterService(writer)
              .catch((error) => createWriterService(writer))
              .then((writer) => {
                writers.push(writer);
                createShowWriterService({
                  showId: show.showId,
                  writerId: writer.writerId,
                }).catch((error) => log.error(error));
              })
          )
        )
        .catch((error) => log.error(error));

      const responseData = {
        show: {
          showId: show.showId,
          movieId: movie.movieId,
          name: show.name,
          releaseYear: show.releaseYear,
          summary: show.summary,
          pgRating: show.pgRating,
          budget: show.budget,
          revenue: show.revenue,
          length: movie.length,
        },
        actors,
        directors,
        genres,
        imdb,
        languages,
        server: {
          name: membed.name,
          url: membed.url,
          movieUrl: membed.movieUrl,
        },
        studios,
        writers,
      };
      shows.push(responseData);
    }
    res.status(200).json({
      status: "success",
      data: {
        message: "The movie was inserted successfully",
        shows,
      },
    });
  } catch (error: any) {
    next(error);
  }
};
