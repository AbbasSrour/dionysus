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
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.doc";

// Routes

// Environment
ValidateEnv();
dotenv.config();

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
    const swaggerOpts = {
      explorer: true,
    };

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
    app.use(
      "/docs",
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocs, swaggerOpts)
    );

    // UNHANDLED ROUTE
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
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
      log.info(`⚡️[engine]: Engine running at https://localhost:${env.PORT}`);
    });
  })
  .catch((error) => {
    log.error(error);
  });
