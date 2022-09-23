import ky from 'ky';

export class BaseApi {
  baseUrl = 'http://localhost:4000/api/v1';

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

  async post(
    url: string,
    { searchParams, body }: { searchParams?: object; body?: object },
  ) {
    const response: any = await ky
      .post(`${this.baseUrl}${url}`, {
        searchParams: { ...searchParams },
        json: { ...body },
      })
      .json();
    return (await response).data;
  }
}
