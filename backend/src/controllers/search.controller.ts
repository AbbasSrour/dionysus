// import { Request, Response, NextFunction } from "express";
// import { RedisClient } from "../utils/redis.util";
// import Movie from "../entities/movie.entity";
// import { Series } from "../entities/series.entity";
// import { searchSeries } from "../services/series.service";
// import { searchMovies } from "../services/movies.service";
//
// export const searchHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { searchTerm } = req.body;
//     const cachedSearch: null | string = await RedisClient.get(
//       `search: ${searchTerm}`
//     );
//
//     if (cachedSearch) return res.status(201).json(cachedSearch);
//     else {
//       const movies: Array<Movie> | null = await searchMovies(searchTerm);
//       const series: Array<Series> | null = await searchSeries(searchTerm);
//       const searchResults = {
//         ...movies,
//         ...series,
//       };
//
//       // Send request to crawler
//       // const crawlerRequest = got.post("");
//       const crawlerRequest = "helloworld";
//
//       // TODO: More thought should go into this especially the expiration
//       if (crawlerRequest != null)
//         RedisClient.set(
//           `search: ${searchTerm}`,
//           JSON.stringify(searchResults),
//           { EX: 5 }
//         );
//
//       res.status(201).json({
//         status: "success",
//         data: searchResults,
//       });
//     }
//   } catch (error) {}
// };
