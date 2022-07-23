import {object, string, TypeOf} from "zod";

export const SearchSchema = object({
    body: object({
        apikey: string(),
        searchTerm: string()
    })
});

export type SearchSchemaInput = TypeOf<typeof SearchSchema>["body"];
