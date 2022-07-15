//------------------------------------------ Imports --------------------------------------------------------//
// Environment
import path from "path";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "development")
  dotenv.config({
    path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`),
  });
else if (process.env.NODE_ENV === "staging")
  dotenv.config({
    path: path.resolve(__dirname, `../../${process.env.NODE_ENV}.env`),
  });
else dotenv.config();

import ValidateEnv, { env } from "./utils/validate-env.util";
// Rest
import express, { Application, NextFunction, Request, Response } from "express";
import AppError from "./errors/app.error";

// Utils
import { AppDataSource } from "./utils/data-source.util";
import { ConnectRedis, RedisClient } from "./utils/redis.util";
import {getLogger} from "./utils/logger.util";

// Middleware
import cors from "cors";
import cookieParser from "cookie-parser";

// Documentation
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.doc";

// Routes
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import searchRoute from "./routes/search.route";

AppDataSource.initialize()
  .then(async () => {
    //------------------------------------------ Setup ------------------------------------------------------//
    const redis = await ConnectRedis();
    const app: Application = express();
    ValidateEnv();
    const log = getLogger();

    //------------------------------------------ Middleware ------------------------------------------------//

    // Json Parser
    app.use(express.json());

    // Cookie Parser
    app.use(cookieParser());

    // logger
    // if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
    // noinspection SpellCheckingInspection
    const loggerstream = {
      write: function (message: any, encoding: any) {
        log.error(message);
      },
    };
    app.use(require("morgan")("combined", { stream: loggerstream }));

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
      res.send("Express + TypeScript Server");
      console.log("hello world");
    });

    // Health Check Route
    app.get("/health", async (req: Request, res: Response) => {
      const message = await RedisClient.get("try");
      res.status(200).json({ status: "success", message });
    });

    // Documentation
    app.use(
      "/docs",
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocs, swaggerOpts)
    );

    // Authentication Route
    app.use("/api/v1/auth", authRoute);

    // User Route
    app.use("/api/v1/users", userRoute);

    // Search Route
    app.use("/api/v1/search", (req: Request, res: Response) => {
      res.send("hello world");
    });

    app.use("/api/v1/search1", searchRoute);

    // UNHANDLED ROUTE
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );

    //------------------------------------------ Listen ----------------------------------------------------//
    const port = env.PORT;
    const environment = env.NODE_ENV;
    const dbName = env.PSQL_DB_NAME;
    const dbPort = env.PSQL_DB_PORT;
    app.listen(port, "0.0.0.0", () => {
      log.error(`⚡️[server]: Server running at https://localhost:${port}`);
      log.error(
        `🌱[environment]: Server running on ${environment} environment`
      );
      log.error(`🗄️[Database]: Psql db ${dbName} running on port ${dbPort}`);
      if (redis) log.info("📕[redis]: Redis client connected successfully");
    });
  })
  .catch((error) => console.log(error));
