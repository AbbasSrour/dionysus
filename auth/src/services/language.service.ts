import { Language, ShowLanguage } from "../../prisma/client";
import { LanguageInput, ShowLanguagesInput } from "../schemas/language.schema";
import client from "../utils/prisma.util";

export const createLanguageService = async (
  input: LanguageInput
): Promise<Language> => {
  return client.language.create({ data: input });
};

export const getLanguageByIdService = async (id: number) => {
  return client.language.findUniqueOrThrow({ where: { languageId: id } });
};

export const getLanguageByNameService = async (name: string) => {
  return client.language.findUniqueOrThrow({ where: { name } });
};

export const createShowLanguageService = async (
  input: ShowLanguagesInput
): Promise<ShowLanguage> => {
  const { showId, languageId } = input;
  return client.showLanguage.create({ data: input });
};

export const getShowLanguageService = async (
  showId: number,
  languageId: number
): Promise<ShowLanguage | null> => {
  return client.showLanguage.findUniqueOrThrow({
    where: { showId_languageId: { showId, languageId } },
  });
};
