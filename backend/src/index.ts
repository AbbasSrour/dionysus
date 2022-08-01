//------------------------------------------ Imports --------------------------------------------------------//
// Environment
import dotenv from "dotenv";
import ValidateEnv, { env } from "./utils/validate-env.util";

// Rest
import express, { Application, NextFunction, Request, Response } from "express";
import AppError from "./errors/app.error";

// Utils
import { ConnectRedis, RedisClient } from "./utils/redis.util";
import { AppDataSource } from "./utils/data-source.util";
import log from "./utils/logger.util";

// Middleware
import cors from "cors";
import cookieParser from "cookie-parser";
import morganMiddleware from "./middleware/morgan.middleware";

// Documentation
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.doc";

// Routes
import UserRoute from "./routes/user.route";
import AuthRoute from "./routes/auth.route";
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
import SearchRoute from "./routes/search.route";

AppDataSource.initialize().then(() => {
  //------------------------------------------ Setup ------------------------------------------------------//
  // Environment
  dotenv.config();
  ValidateEnv();

  // Server
  const app: Application = express();

  // Redis
  ConnectRedis()
    .then((redis) =>
      redis
        ? log.info("📕[redis]: Redis client connected successfully")
        : log.error("📕[redis]: Redis client failed")
    )
    .catch((error) => {
      log.error(error.messages);
      throw error;
    });

  //------------------------------------------ Middleware ------------------------------------------------//

  // Json Parser
  app.use(express.json());

  // Cookie Parser
  app.use(cookieParser());

  // Morgan
  app.use(morganMiddleware);

  // Cors
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );

  // Template Engine
  app.set("view engine", "pug");
  app.set("views", `${__dirname}/views`);

  // Swagger Api Documentation
  const swaggerOpts = {
    explorer: true,
  };

  //------------------------------------------ Routes ----------------------------------------------------//

  // Default Route
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Backend Server");
  });

  // Health Check Route
  app.get("/health", async (req: Request, res: Response) => {
    const redisMessage = await RedisClient.get("try");
    res.status(200).json({ status: "success", redisMessage });
  });

  // Documentation
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, swaggerOpts));

  // Authentication Route
  app.use("/api/v1/auth", AuthRoute);

  // User Route
  app.use("/api/v1/users", UserRoute);

  // // Search Route
  app.use("/api/v1/search", SearchRoute);

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
  app.listen(env.PORT, "0.0.0.0", () => {
    log.info(`⚡️[server]: Server running at https://localhost:${env.PORT}`);
    log.info(`🌱[environment]: Server running on ${env.NODE_ENV} environment`);
    log.info(
      `🗄️[Database]: Psql db ${env.PSQL_DB_NAME} running on port ${env.PSQL_DB_PORT}`
    );
  });
});
