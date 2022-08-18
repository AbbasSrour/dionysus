import { WriterInput } from "../schemas/writer.schema";

// TODO Scrape Writer Image
export const scrapeWritersFromImdb = async ($: cheerio.Root) => {
  const writers = new Array<WriterInput>();
  // $('li[data-testid="title-pc-principal-credit"]:nth-of-type(1)')
  //   .find("div > ul > li")
  //   .each((i, elem) => {
  //     writers[i] = $(elem).find("a").attr("href");
  //   });
  $('li[data-testid="title-pc-principal-credit"]:nth-of-type(2)')
    .first()
    .find("div > ul > li > a")
    .each((i, elem) => {
      writers[i] = { name: $(elem).text(), image: "default.png" };
    });
  return writers;
};
