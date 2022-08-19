import { boolean, number, object, string, TypeOf } from "zod";

export const ImageSchema = object({
  body: object({
    showId: number(),
    url: string(),
    type: string().optional(),
    height: number().optional(),
    width: number().optional(),
    aspectRatio: number().optional(),
    language: string().optional(),
    isDefault: boolean().default(false),
  }),
});

export type ImageInput = TypeOf<typeof ImageSchema>["body"];
