//------------------------------------------ Imports --------------------------------------------------------//
// Environment
import dotenv from "dotenv";
import ValidateEnv, { env } from "./utils/validate-env.util";

// Rest
import express, { Application, NextFunction, Request, Response } from "express";
import AppError from "./errors/app.error";

// Utils
import { AppDataSource } from "./utils/data-source.util";
import log from "./utils/logger.util";

// Middleware
import cors from "cors";
import morganMiddleware from "./middleware/morgan.middleware";

// Documentation
// import swaggerUI from "swagger-ui-express";
// import swaggerDocs from "./docs/swagger.doc";
// Routes
import MovieRoute from "./routes/movie.route";
import ActorRoute from "./routes/actor.route";
import ImdbRoute from "./routes/imdb.route";
import DirectorRoute from "./routes/director.route";
import WriterRoute from "./routes/writer.route";
import GenreRoute from "./routes/genre.route";
import LanguageRoute from "./routes/language.route";
import ProductionCompanyRoute from "./routes/production-company.route";
import ServerRoute from "./routes/server.route";
import MovieCastRoute from "./routes/movie-cast.route";
import MovieGenreRoute from "./routes/movie-genre.route";
import MovieImdbRoute from "./routes/movie-imdb.route";
import MovieLanguageRoute from "./routes/movie-language.route";
import MovieProductionCompanyRoute from "./routes/movie-production-company.route";
import MovieServerRoute from "./routes/movie-server.route";
import MovieWriterRoute from "./routes/movie-writer.route";
import MovieDirectorRoute from "./routes/movie-director.route";

// Environment
dotenv.config();
ValidateEnv();

AppDataSource.initialize()
  .then(() => {
    //------------------------------------------ Setup ------------------------------------------------------//
    // Server
    const app: Application = express();

    //------------------------------------------ Middleware ------------------------------------------------//
    // Json Parser
    app.use(express.json());

    // Morgan
    app.use(morganMiddleware);

    // Cors
    if (env.NODE_ENV === "development")
      app.use(
        cors({
          origin: process.env.ORIGIN,
          credentials: true,
        })
      );

    // Swagger Api Documentation
    // const swaggerOpts = {
    //   explorer: true,
    // };

    //------------------------------------------ Routes ----------------------------------------------------//
    // Default Route
    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Database Wrapper Server");
    });

    // Health Check Route
    app.get("/health", async (req: Request, res: Response) => {
      // const scrapperMessage = got();
      // const engineMessage = got();
      // const dbWrapperMessage = got();
      res.status(200).json({
        status: "success",
        message:
          "Everything is working just fine for now, remember to implement a proper health check",
      });
    });

    // Documentation
    // app.use(
    //   "/docs",
    //   swaggerUI.serve,
    //   swaggerUI.setup(swaggerOpts)
    // );

    // Route
    app.use("/api/v1/actors", ActorRoute);
    app.use("/api/v1/directors", DirectorRoute);
    app.use("/api/v1/genres", GenreRoute);
    app.use("/api/v1/imdb", ImdbRoute);
    app.use("/api/v1/languages", LanguageRoute);
    app.use("/api/v1/production-companies", ProductionCompanyRoute);
    app.use("/api/v1/servers", ServerRoute);
    app.use("/api/v1/writers", WriterRoute);
    app.use("/api/v1/movies", MovieRoute);
    app.use("/api/v1/movie-cast", MovieCastRoute);
    app.use("/api/v1/movie-directors", MovieDirectorRoute);
    app.use("/api/v1/movie-genres", MovieGenreRoute);
    app.use("/api/v1/movie-imdb", MovieImdbRoute);
    app.use("/api/v1/movie-languages", MovieLanguageRoute);
    app.use("/api/v1/movie-production-company", MovieProductionCompanyRoute);
    app.use("/api/v1/movie-servers", MovieServerRoute);
    app.use("/api/v1/movie-writers", MovieWriterRoute);

    // UNHANDLED ROUTE
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
    // noinspection JSUnusedLocalSymbols
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;
        log.error(error);
        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );

    //------------------------------------------ Listen ----------------------------------------------------//
    app.listen(env.PORT, () => {
      log.info(
        `⚡️[db-wrapper]: Db-Wrapper running at https://localhost:${env.PORT}`
      );
    });
  })
  .catch((error) => {
    log.error(error);
  });
