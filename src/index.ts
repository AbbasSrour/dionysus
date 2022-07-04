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

// Database
import { AppDataSource } from "./utils/data-source.util";
import { RedisClient, ConnectRedis } from "./utils/redis.util";

// Middleware
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Documentation
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./docs/swagger";

// Routes
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";

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
    if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

    // Cors
    app.use(
      cors({
        origin: config.get<string>("origin"),
        credentials: true,
      })
    );

    // Swagger Api Documentation
    const swaggerOpts = {
      explorer: true,
    };
    app.use(
      "/docs",
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocs, swaggerOpts)
    );

    // Template Engine
    app.set("view engine", "pug");
    app.set("views", `${__dirname}/views`);

    //------------------------------------------ Routes ----------------------------------------------------//

    // Default Route
    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
      console.log("hello world");
    });

    // Health Check Route
    app.get("/api/v1/healthchecker", async (req: Request, res: Response) => {
      const message = await RedisClient.get("try");
      res.status(200).json({ status: "success", message });
    });

    // Authentication Route
    app.use("/api/v1/auth", authRoute);

    // User Route
    app.use("/api/v1/users", userRoute);

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

    app.listen(config.get<number>("port"), () => {
      console.log(`⚡️[server]: Server running at https://localhost:${port}`);
      console.log(`🌱[enviroment]: Server running on ${env} enviroment`);
      console.log(`🗄️[Database]: Psql db ${dbName} running on port ${dbPort}`);
      if (redis) console.log("📕[redis]: Redis client connected successfully");
    });
  })
  .catch((error) => console.log(error));
