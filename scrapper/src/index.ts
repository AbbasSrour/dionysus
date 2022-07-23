import dotenv from "dotenv";
dotenv.config();

import express, {Application, json, Response, Request} from "express"
import {AppDataSource} from "./utils/data-source.util";
import ValidateEnv, {env} from "./utils/validate-env.util";
import SearchRoute from "./routes/search.route"



AppDataSource.initialize().then(
    async () => {

        //------------------------------------------ Setup ------------------------------------------------------//
        ValidateEnv();
        const app: Application = express();


        //------------------------------------------ Middleware ------------------------------------------------//
        app.use(express.json());

        //------------------------------------------ Routes ----------------------------------------------------//


        app.use("/api/v1/search", SearchRoute);

        // app.use("/api/v1",(req:Request, res:Response)=>{
        //     res.send("helloworld");
        // })

        //------------------------------------------ Listen ----------------------------------------------------//
        app.listen(env.PORT, () => {
            console.log("hello world");
        });
    }
)
    .catch((error) => console.log(error));