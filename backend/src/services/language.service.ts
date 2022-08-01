import { AppDataSource } from "../utils/data-source.util";
import Language from "../entities/language.entity";
import { LanguageInput } from "../schemas/language.schema";

const languageRepo = AppDataSource.getRepository(Language);

export const createLanguageService = async (
  input: LanguageInput
): Promise<Language> => {
  const language = AppDataSource.manager.create(Language, input);
  return (await AppDataSource.manager.save(language)) as Language;
};
