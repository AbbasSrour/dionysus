import {NextFunction, Request, Response} from "express";
// import { ElasticClient } from "../utils/elastic.util";
import got from "got";
import {env} from "../utils/validate-env.util";
import log from "../utils/logger.util";

export const SearchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {searchTerm} = req.body;
  // const check = await ElasticClient.search({
  //   index: "SearchTerms",
  //   query: {
  //     match: { searchTerm: searchTerm },
  //   },
  // });

  // if (check) {
  // Search elastic search for the movie and return it
  // } else {
  // await ElasticClient.index({
  //   index: "SearchTerms",
  //   document: {
  //     searchTerm: searchTerm,
  //   },
  // });

  try {
    const scrape = await got.post(`http://localhost:4001/api/v1/scrape`, {
      json: {
        apikey: `${env.API_KEY}`,
        searchTerm: `${searchTerm}`,
      },
    });
    const response = await JSON.parse(scrape.body);
    res.status(200).json({response});
  } catch (error: any) {
    log.error(error);
    next(error);
  }
};
