import { object, string, TypeOf } from "zod";

export const ScrapeSchema = object({
  body: object({
    apikey: string(),
    searchTerm: string().optional(),
    imdbId: string().optional(),
  }),
});

export type ScrapeSchemaInput = TypeOf<typeof ScrapeSchema>["body"];
