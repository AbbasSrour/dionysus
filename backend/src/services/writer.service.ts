import { AppDataSource } from "../utils/data-source.util";
import { Writer } from "../entities/writer.entity";
import { WriterInput } from "../schemas/writer.schema";

const writerRepo = AppDataSource.getRepository(Writer);

export const createWriterService = async (input: WriterInput) => {
  const writer = AppDataSource.manager.create(Writer, input);
  return (await AppDataSource.manager.save(writer)) as Writer;
};
