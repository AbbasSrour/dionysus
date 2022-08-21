import {number, object, TypeOf} from "zod";

export const MovieSchema = object({
  body: object({
    showId: number(),
    length: number(),
  }),
});
export type MovieInput = TypeOf<typeof MovieSchema>["body"];
