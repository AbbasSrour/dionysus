import { object, string, TypeOf } from "zod";

export const WriterSchema = object({
  body: object({
    name: string({ required_error: "The name of the writer is required" })
      .min(3, "The writer name is too short")
      .max(30, "The writer name is too long"),
    image: string(),
  }),
});

export type WriterInput = TypeOf<typeof WriterSchema>["body"];