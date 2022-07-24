import { Series } from "../entities/series.entity"
import { AppDataSource } from "../utils/data-source.util"

const SeriesRepo = AppDataSource.getRepository(Series);

export const searchSeries = async (searchTerm: string): Promise<Array<Series> | null> => {
  return SeriesRepo.createQueryBuilder("series")
    .where("series.name like :name ", { name: `%${searchTerm}%` })
    .getMany();
}
