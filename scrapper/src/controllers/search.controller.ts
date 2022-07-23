import { NextFunction, Request, Response } from "express";
import { content_id, ImdbMovieData, map_shows } from "../utils/scraper.util";

export const SearchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.body;
  try {
    const showList = await map_shows(searchTerm);

    for (let i = 0; i < showList.length; i++) {
      let serverId = await content_id(showList[i]);
      if (serverId === "No Server Id Found") {
        showList.splice(i, 1);
        i--;
      }
      // const movieData = await ImdbMovieData(showList[0]);
      // const serverLink = await content(serverId);
    }

    const movieData = await ImdbMovieData(showList[0]);
    res.send("jello");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
