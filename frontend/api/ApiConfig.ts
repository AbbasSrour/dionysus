import ky from 'ky';

export class Api {
  baseUrl: string = 'http://localhost:4000/api/v1';

  constructor() {}

  async get(url: string, searchParams?: object) {
    let response: any;
    if (searchParams)
      response = await ky
        .get(`${this.baseUrl}${url}`, {
          searchParams: { ...searchParams },
        })
        .json();
    else response = await ky.get(`${this.baseUrl}${url}`).json();
    return (await response).data;
  }

  async post(url: string, searchParams?: object) {
    let response: any;
    if (searchParams)
      response = await ky
        .post(`${this.baseUrl}${url}`, {
          searchParams: { ...searchParams },
        })
        .json();
    else response = await ky.get(`${this.baseUrl}${url}`).json();
    return (await response).data;
  }
}
