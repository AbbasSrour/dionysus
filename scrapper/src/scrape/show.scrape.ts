import { ShowInput } from "../schemas/show.schema";

export const scrapeShowFromImdb = async (
  $: cheerio.Root
): Promise<ShowInput> => {
  const hero = await $('ul[data-testid="hero-title-block__metadata"]');

  const name = await $('h1[data-testid="hero-title-block__title"]').text();
  const releaseYear = parseInt(await hero.find("li:first-child > a").text());
  const pgRating = await hero.find("li:nth-child(2) > a").text();
  const summary = await $('[data-testid="plot"]').find(":nth-child(3)").text();
  const budget =
    parseInt(
      $('li[data-testid="title-boxoffice-budget"] > div > ul > li > span')
        .text()
        .replace("$", "")
        .replace(/,/g, "")
    ) | 0;
  const revenue =
    parseInt(
      $(
        'li[data-testid="title-boxoffice-cumulativeworldwidegross"] > div > ul > li > span '
      )
        .text()
        .replace("$", "")
        .replace(/,/g, "")
    ) | 0;

  return {
    name,
    releaseYear,
    summary,
    pgRating,
    budget,
    revenue,
  };
};
