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
  getProductionCompanies,
  getWriters,
  map_shows,
} from "../utils/scraper.util";
import {createMovieService} from "../services/movie.service";
import {createDirectorService} from "../services/director.service";
import {createActorService} from "../services/actor.service";
import {createProductionCompanyService} from "../services/production-company.service";
import AppError from "../errors/app.error";
import {createWriterService} from "../services/writer.service";
import {createImdbService} from "../services/imdb.service";
import {createLanguageSerivce} from "../services/language.service";
import {createServerService} from "../services/server.service";
import {createMovieProductionCompanyService} from "../services/movie-production-company.service";
import {createMovieCastService} from "../services/movie-cast.service";
import {createMovieDirectors} from "../services/movie-driector.service";
import {createMovieWriterService} from "../services/movie-writer.service";
import {createMovieLanguageService} from "../services/movie-language.service";
import {createGenreService} from "../services/genre.service";
import {createMovieGenreService} from "../services/movie-genre.service";
import {ActorInput} from "../schemas/actor.schema";
import {DirectorInput} from "../schemas/director.schema";

// TODO: Needs a lot of rethinking for async error handling
// TODO: Refactor some more because this is fucking blocking everything with one hundred awaits use promise.all
export const SearchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.body;
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

      const movieData = await getMovieData(imdbPage).catch((error) => {
        throw new AppError(
          500,
          `Couldn't get movie ${movieData.name} with ${imdbId} imdb id data`
        );
      });
      const movie = await createMovieService(movieData).catch((error) => {
        console.log(error);
        return null;
      });
      if (!movie) continue;
      //////////////////////////////////////////Sync 1////////////////////////////////////////////////////

      const serverData = await content(serverId);
      const server = await createServerService({
        name: serverData.name,
        url: serverData.url,
      }).catch((error) => {
        console.log(error);
      });

      const imdbData = await createImdbService(
        await getImdbData(imdbPage, imdbId)
      );

      const directorData: Array<DirectorInput> = await getDirectors(imdbPage);
      const directors = [];
      for (let i = 0; i < directorData.length; i++) {
        directors.push(await createDirectorService(directorData[i]));
      }

      const movieDirectors = [];
      for (let i = 0; i < directors.length; i++) {
        movieDirectors.push(
          await createMovieDirectors({ movie, director: directors[i] })
        );
      }

      const actorData: Array<ActorInput> = await getActors(imdbPage);
      const actors = [];
      for (let i = 0; i < actorData.length; i++) {
        actors.push(await createActorService(actorData[i]));
      }

      const movieCast = [];
      for (let i = 0; i < actors.length; i++) {
        movieCast.push(
          await createMovieCastService({
            movie,
            actor: actors[i],
            role: actorData[i].role,
          }).catch((error) => console.log(error))
        );
      }

      const productionCompanyData = await getProductionCompanies(imdbPage);
      const productionCompanies = [];
      for (let i = 0; i < productionCompanyData.length; i++) {
        productionCompanies.push(
          await createProductionCompanyService(productionCompanyData[i])
        );
      }

      const movieProductionCompanies = [];
      for (let i = 0; i < productionCompanies.length; i++) {
        movieProductionCompanies.push(
          await createMovieProductionCompanyService({
            movie,
            productionCompany: productionCompanies[i],
          })
        );
      }

      const writerData = await getWriters(imdbPage);
      const writers = [];
      for (let i = 0; i < writerData.length; i++) {
        writers.push(await createWriterService(writerData[i]));
      }

      const movieWriters = [];
      for (let i = 0; i < writers.length; i++) {
        movieWriters.push(
          await createMovieWriterService({ movie, writer: writers[i] }).catch(
            (error) => console.log(error)
          )
        );
      }

      const languageData = await getLanguages(imdbPage);
      const languages: any[] = [];
      const movieLanguages: any[] = [];
      for (let i = 0; i < languageData.length; i++) {
        createLanguageSerivce(languageData[i])
          .then((language) => {
            languages.push(language);
            return language;
          })
          .then((language) =>
            createMovieLanguageService({ movie, language }).then(
              (movieLanguage) => movieLanguages.push(movieLanguage)
            )
          )
          .catch((error) => {
            console.log(error);
          });
      }

      // const movieLanguages = [];
      // for (let i = 0; i < languages.length; i++) {
      //   movieLanguages.push(
      //       await createMovieLanguageService({movie, language: languages[i]})
      //   );
      // }

      console.log(languages, movieLanguages);

      const genreData = await getGenres(imdbPage);
      const genres = [];
      for (let i = 0; i < genreData.length; i++) {
        genres.push(
          await createGenreService(genreData[i]).catch((error) =>
            console.log(error)
          )
        );
      }

      const movieGenres = [];
      for (let i = 0; i < genres.length; i++) {
        movieGenres.push(
          await createMovieGenreService({ movie, genre: genres[i] }).catch(
            (error) => console.log(error)
          )
        );
      }
    }
    res.status(200).json({
      status: "success",
      data: { message: "The movie was inserted successfully" },
    });
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};
