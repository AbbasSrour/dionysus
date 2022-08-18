// TODO Scrape The Full Actor List
export const scrapeActorsFromImdb = async (
  $: cheerio.Root
): Promise<Array<{ name: string; image: string; role: string }>> => {
  const actors = new Array<{ name: string; image: string; role: string }>();
  $(
    'div[data-testid="shoveler"] > div[data-testid="shoveler-items-container"] > div[data-testid="title-cast-item"]'
  ).each((i, elem) => {
    let image: string;
    try {
      // @ts-ignore
      image = $(elem)
        .find("div > div > div > img ")
        .attr("srcset")
        .split("w,")[2]
        .replace(/\s\d{3}[w]/g, "")
        .replace(/^\s/, "");
    } catch (e) {
      image = "";
    }
    const name = $(elem).find("div > a").text();
    const role = $(elem)
      .find('div > ul > li > a[data-testid="cast-item-characters-link"] > span')
      .text();
    let actor = { name, image, role };
    actors.push(actor);
  });
  return actors;
};
