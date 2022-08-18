import { GenreInput } from "../schemas/genre.schema";

export const scrapeGenresFromImdb = async (
  $: cheerio.Root
): Promise<Array<GenreInput>> => {
  const genres = new Array<GenreInput>();
  $('div[data-testid="genres"]:nth-child(1) > div')
    .find("a")
    .each((i, elem) => {
      let genre: GenreInput = {
        name: $(elem).text(),
      };
      genres.push(genre);
    });
  return genres;
};
