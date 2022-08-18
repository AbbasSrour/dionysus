const ratingCount = (ratingString: string): number => {
  let rating = 0;
  let aux = 1;
  let multiplier = "t";
  let float = false;
  for (let i = 0; i < ratingString.length; i++) {
    let x = ratingString.charAt(ratingString.length - (i + 1));
    if (x === "M" || x === "K") {
      multiplier = x;
      continue;
    } else if (x !== "M" && x !== "K" && x !== "." && !float) {
      rating += parseInt(x) * aux;
    } else if (x === ".") {
      float = true;
      continue;
    } else if (float && x !== "M" && x !== "K") {
      rating += parseInt(x) * aux;
    }
    aux *= 10;
  }
  if (multiplier === "M" && float) rating *= 100000;
  else if (multiplier === "M" && !float) rating *= 1000000;
  else if (multiplier === "K" && float) rating *= 100;
  else if (multiplier === "K" && !float) rating *= 1000;

  return rating;
};

export const scrapeImdbShowData = async (
  $: cheerio.Root
): Promise<{ rating: number; voteCount: number }> => {
  const rating = parseFloat(
    $(
      "div[data-testid='hero-rating-bar__aggregate-rating__score'] > span:first"
    ).text()
  );

  // TODO FIX THIS
  // @ts-ignore
  const voteCount = ratingCount(
    // @ts-ignore
    $(
      'div[data-testid="hero-rating-bar__aggregate-rating"] > a > div > div > div'
    )
      .find("div:nth-child(3)")
      .html()
  );
  return { rating, voteCount };
};
