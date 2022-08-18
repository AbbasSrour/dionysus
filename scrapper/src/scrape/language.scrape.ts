import { LanguageInput } from "../schemas/language.schema";

export const scrapeLanguagesFromImdb = async (
  $: cheerio.Root
): Promise<Array<LanguageInput>> => {
  const languages = new Array<LanguageInput>();
  $('li[data-testid="title-details-languages"] > div > ul')
    .find("li")
    .each((i, elem) => {
      let language: LanguageInput = {
        name: $(elem).find("a").text(),
      };
      languages.push(language);
    });
  return languages;
};
