import ky, { KyResponse } from "ky";
import { ShowSchema } from "../schemas/show.schema";

export class Api {
  baseUrl: string = "http://localhost:4000/api/v1";
  apiKey: string = "9764eaeb3f4f2a1315231f6d1bf933fd";

  constructor() {}

  getShow = async (url: string, searchParams: object): Promise<ShowSchema> => {
    const response = await ky
      .get(`${this.baseUrl}/${url}`, {
        searchParams: { ...searchParams },
      })
      .json();

    // @ts-ignore
    return (await response).data.show;
  };
}
