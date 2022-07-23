import {number, object, string, TypeOf} from "zod";

export const MovieSchema = object({
    name: string(),
    releaseYear: number(),
    wallpaper: string(),
    imdbId: string(),
    summary: string(),
    trailer: string(),//
    pgRating: string(),
    movieLength: string(),
    budget: string(),
    revenue: string(),//
    ogLanguage: string(),
})

export type MovieSchemaInput = TypeOf<typeof MovieSchema>;
