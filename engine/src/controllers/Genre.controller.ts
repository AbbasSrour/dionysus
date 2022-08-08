import {NextFunction, Request, Response} from "express";
import ts from "@tensorflow/tfjs"
import got from "got";
import {env} from "../utils/validate-env.util";

const GenreHandler = async (req:Request, res:Response, next:NextFunction) => {
    try {

        ts.losses.cosineDistance;

        const {userId} = req.body;

        // get user  movie history
        got.get(`${"localhost:3000/user-history"}`,{
            json:{
                apikey: env.API_KEY,
                userId: userId
            }
        })



    }catch (error) {
        next(error);
    }

}