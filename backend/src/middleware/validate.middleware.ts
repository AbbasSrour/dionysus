import { AnyZodObject, ZodError } from "zod";
import { NextFunction, Request, Response } from "express";

export const Validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    // if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    //   throw new LocalError(444, "Empty body");
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          error: error.errors,
        });
        // } else if (error.statusCode === 444) {
        //   return res.status(400).json({
        //     status: "fail",
        //     error: error.errors,
        //     message: "Empty body",
        //   });
      } else next(error);
    }
  };
