import { AppDataSource } from "../utils/data-source.util";
import Imdb from "../entities/imdb.entity";
import { ImdbInput } from "../schemas/imdb.schema";

const imdbRepo = AppDataSource.getRepository(Imdb);

export const createImdbService = async (input: ImdbInput): Promise<Imdb> => {
  const imdb = AppDataSource.manager.create(Imdb, input);
  return (await AppDataSource.manager.save(imdb)) as Imdb;
};
