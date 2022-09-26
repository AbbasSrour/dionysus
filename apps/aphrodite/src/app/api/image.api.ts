import { BaseApi } from './base.api';

export class ImageApi {
  private api = new BaseApi();
  private url = '/image';

  async getImages(page: number) {
    const response = await this.api.get(`${this.url}`, { page });
    return await response.json();
  }
}
