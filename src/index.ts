import express, { Request, Response } from "express";

require("dotenv").config();
import config from "config";
import ValidateEnv from "./utils/ValidateEnv";

import { AppDataSource } from "./utils/data-source";
import { RedisClient, ConnectRedis } from "./utils/ConnectRedis";

import AuthRouter from "./routes/AuthRoute";
// import MoviesRouter from "./src/routes/MovieRoute";
// import SearchRouter from "./src/routes/SearchRoute";
// import SeriesRouter from "./src/routes/SeriesRoute";

AppDataSource.initialize()
  .then(async () => {
    //------------------------------------------ Setup ------------------------------------------------------//
    ValidateEnv();
    ConnectRedis();
    const app = express();

    //------------------------------------------ Middleware ------------------------------------------------//

    app.use(express.json({ limit: "10kb" }));

    // 2. Logger

    // 3. Cookie Parser

    // 4. Cors

    //------------------------------------------ Routes ----------------------------------------------------//

    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
      console.log("hello world");
    });

    app.get("/api/v1/healthchecker", async (req: Request, res: Response) => {
      const message = await RedisClient.get("try");
      res.status(200).json({
        status: "success",
        message,
      });
    });

    app.use("/api/v1/auth", AuthRouter);
    // app.use("/api/v1/movies")
    // app.use("/api/v1/search")
    // app.use("/api/v1/series")

    // UNHANDLED ROUTE

    // GLOBAL ERROR HANDLER

    //------------------------------------------ Listen ----------------------------------------------------//
    const port = config.get<number>("port");
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((error) => console.log(error));
