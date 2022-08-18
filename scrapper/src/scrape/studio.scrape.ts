import { StudioInput } from "../schemas/studio.schema";
import log from "../utils/logger.util";

export const scrapeStudiosFromImdb = async ($: cheerio.Root) => {
  const ProductionCompaniesArray = new Array<StudioInput>();
  let name: string;
  let image = "";
  $('li[data-testid="title-details-companies"] > div > ul > li').each(
    (i, elem) => {
      try {
        name = $(elem).find("a").text();
      } catch (error) {
        log.error(error);
        name = "";
      }
      let productionCompany: StudioInput = { name, image };
      ProductionCompaniesArray.push(productionCompany);
    }
  );
  return ProductionCompaniesArray;
};
