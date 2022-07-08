//------------------------------------------ Imports --------------------------------------------------------//
// Enviroment
import path from "path";
import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`),
});
import config from "config";
import ValidateEnv from "./utils/validate-env.util";

// Rest
import express, { NextFunction, Request, Response, Application } from "express";
import AppError from "./errors/app.error";

// Utils
import { AppDataSource } from "./utils/data-source.util";
import { RedisClient, ConnectRedis } from "./utils/redis.util";
import log from "./utils/logger.util";

// Middleware
import cors from "cors";
import morgan from "morgan";
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
    ValidateEnv();
    const redis = await ConnectRedis();
    const app: Application = express();

    //------------------------------------------ Middleware ------------------------------------------------//

    // Json Parser
    app.use(express.json());

    // Cookie Parser
    app.use(cookieParser());

    // logger
    // if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
    const loggerstream = {
      write: function(message: any, encoding: any) {
        log.info(message);
      },
    };
    app.use(require("morgan")("combined", { stream: loggerstream }));

    // Cors
    app.use(
      cors({
        origin: config.get<string>("origin"),
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
    const port = config.get<number>("port");
    const env = config.get<string>("enviroment");
    const dbName = config.get<{ database: string }>("postgresConfig")[
      "database"
    ];
    const dbPort = config.get<{ database: string; port: number }>(
      "postgresConfig"
    )["port"];

    app.listen(config.get<number>("port"),"0.0.0.0", () => {
      log.info(`⚡️[server]: Server running at https://localhost:${port}`);
      log.info(`🌱[enviroment]: Server running on ${env} enviroment`);
      log.info(`🗄️[Database]: Psql db ${dbName} running on port ${dbPort}`);
      if (redis) log.info("📕[redis]: Redis client connected successfully");
    });
  })
  .catch((error) => console.log(error));
