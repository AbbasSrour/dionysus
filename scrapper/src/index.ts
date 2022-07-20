import express, {Application, json, Request, Response} from "express"
import {AppDataSource} from "./utils/data-source.util";
import dotenv from "dotenv";
import ValidateEnv, {env} from "./utils/validate.util";

AppDataSource.initialize().then(
    async () =>{
        ValidateEnv();
        const app:Application = express();

        app.use(json);

        app.listen(env.PORT,()=>{
            console.log("hello world");
        });
    }
)
.catch((error)=> console.log(error));