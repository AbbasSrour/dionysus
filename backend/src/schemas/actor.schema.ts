import { object, string, TypeOf } from "zod";

export const ActorSchema = object({
  body: object({
    name: string({ required_error: "Actor name is required" }),
    image: string().optional(),
  }),
});

export type ActorInput = TypeOf<typeof ActorSchema>["body"];
