import {boolean, date, number, object, string, TypeOf} from "zod";

export const VideoSchema = object({
  body: object({
    showId: number(),
    url: string(),
    site: string().optional(),
    name: string().optional(),
    quality: number().optional(),
    type: string().optional(),
    official: boolean().optional(),
    language: string().optional(),
    publishedAt: date().optional(),
    isDefault: boolean().default(false).optional(),
  }),
});

export type VideoInput = TypeOf<typeof VideoSchema>["body"];
