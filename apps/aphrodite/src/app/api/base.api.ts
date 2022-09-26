import ky, { KyResponse } from 'ky';

export class BaseApi {
  baseUrl = 'https://localhost:2000/api';

  async get(url: string, searchParams?: object) {
    return ky.get(`${this.baseUrl}${url}`, {
      searchParams: { ...searchParams },
      credentials: 'include',
    });
  }

  async post(
    url: string,
    { searchParams, body }: { searchParams?: object; body?: object },
  ): Promise<KyResponse> {
    return ky.post(`${this.baseUrl}${url}`, {
      searchParams: { ...searchParams },
      json: { ...body },
      credentials: 'include',
    });
  }
}
