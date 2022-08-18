import {DirectorInput} from "../schemas/director.schema";

// TODO Scrape Image
export const scrapeDirectorFromImdb = async (
  $: cheerio.Root
): Promise<Array<DirectorInput>> => {
  const directors = new Array<DirectorInput>();
  // await $('li[data-testid="title-pc-principal-credit"]')
  //   .first()
  //   .find("div > ul > li ")
  //   .each((i, elem) => {
  //     directors[i] = $(elem).find("a").attr("href");
  //   });
  await $('li[data-testid="title-pc-principal-credit"]')
    .first()
    .find("div > ul > li ")
    .each((i, elem) => {
      directors[i] = { name: $(elem).find("a").text(), image: "default.png" };
    });
  return directors;
};
