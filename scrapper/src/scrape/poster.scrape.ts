import log from "../utils/logger.util";

const scrapePosterFromImdb = async ($: cheerio.Root): Promise<string> => {
  let poster;
  try {
    // TODO Fix This
    // @ts-ignore
    poster = await $('div[data-testid="hero-media__poster"] > div')
      .find("img")
      .attr("srcset")
      .split("w,")[2]
      .replace(/\s\d{3}[w]/g, "")
      .replace(/^\s/, "");
    return poster;
  } catch (error) {
    log.error(error);
    return (poster = "");
  }
};

// TODO Scrape More Posters

const posterTmbb = async (imdbId: string) => {

};
