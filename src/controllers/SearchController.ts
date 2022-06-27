import db from "../database/db"
import { Request, Response } from "express"

export const AjaxSearch = async (req: Request, res: Response) => {
  const searchTerm = req;
  const list = await db.query("Select * from dionysus.movie");
  return list;
};
