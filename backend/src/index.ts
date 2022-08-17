//------------------------------------------ Imports --------------------------------------------------------//
// Environment
import dotenv from "dotenv";
import ValidateEnv, { env } from "./utils/validate-env.util";

// Rest
import express, { Application, NextFunction, Request, Response } from "express";
import AppError from "./errors/app.error";

// Utils
import { ConnectRedis, RedisClient } from "./utils/redis.util";
import log from "./utils/logger.util";

// Middleware
import cors from "cors";
import cookieParser from "cookie-parser";
import morganMiddleware from "./middleware/morgan.middleware";

// Documentation
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.doc";

// Routes
import ShowRoute from "./routes/show.route";
import UserRoute from "./routes/user.route";
import AuthRoute from "./routes/auth.route";
import MovieRoute from "./routes/movie.route";
import ActorRoute from "./routes/actor.route";
import ImdbRoute from "./routes/imdb.route";
import DirectorRoute from "./routes/director.route";
import WriterRoute from "./routes/writer.route";
import GenreRoute from "./routes/genre.route";
import LanguageRoute from "./routes/language.route";
import StudioRoute from "./routes/studio.route";
import ServerRoute from "./routes/server.route";
import SearchRoute from "./routes/search.route";

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

app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/search", SearchRoute);
app.use("/api/v1/shows", ShowRoute);
app.use("/api/v1/actors", ActorRoute);
app.use("/api/v1/directors", DirectorRoute);
app.use("/api/v1/genres", GenreRoute);
app.use("/api/v1/imdb", ImdbRoute);
app.use("/api/v1/languages", LanguageRoute);
app.use("/api/v1/studios", StudioRoute);
app.use("/api/v1/servers", ServerRoute);
app.use("/api/v1/writers", WriterRoute);
app.use("/api/v1/movies", MovieRoute);

// UNHANDLED ROUTE
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(404, `Route ${req.originalUrl} not found`));
});

// GLOBAL ERROR HANDLER
app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  error.status = error.status || "error";
  error.statusCode = error.statusCode || 500;
  // log.error(error);

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

//------------------------------------------ Listen ----------------------------------------------------//
app.listen(env.PORT, "0.0.0.0", () => {
  log.info(`⚡️[server]: Server running at https://localhost:${env.PORT}`);
  log.info(`🌱[environment]: Server running on ${env.NODE_ENV} environment`);
  log.info(
    `🗄️[Database]: Psql db ${env.PSQL_DB_NAME} running on port ${env.PSQL_DB_PORT}`
  );
});
