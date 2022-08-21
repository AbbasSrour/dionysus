import {number, object, string, TypeOf} from "zod";

export const ImdbSchema = object({
  body: object({
    imdbId: string({ required_error: "Imdb id is required" })
      .min(5, "The Id is smaller than allowed")
      .max(20, "The Id is bigger than allowed"),
    showId: number(),
    rating: number()
      .min(0, "The min rating score is 0")
      .max(10, "The max rating score is 10"),
    voteCount: number(),
  }),
});

export type ImdbInput = TypeOf<typeof ImdbSchema>["body"];
