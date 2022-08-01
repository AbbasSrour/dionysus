import { NextFunction, Request, Response } from "express";
// import { ElasticClient } from "../utils/elastic.util";
import got from "got";
import { env } from "../utils/validate-env.util";

export const SearchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.body;
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
    const scrape = await got.put(`http://localhost:4000/search`, {
      json: {
        apikey: `${env.API_KEY}`,
        searchTerm: `${searchTerm}`,
      },
    });

    res.status(200).json({});
  } catch (error: any) {
    next(error);
  }
  // }
};
