import { AppDataSource } from "../utils/data-source.util";
import Director from "../entities/director.entity";
import { DirectorInput } from "../schemas/director.schema";

const directorRepo = AppDataSource.getRepository(Director);

export const createDirectorService = async (input: DirectorInput) => {
  const director = AppDataSource.manager.create(Director, input);
  return (await AppDataSource.manager.save(director)) as Director;
};
