import { BaseApi } from './base.api';
import { ImageSchema } from '../schema/image.schema';

export class ImageApi {
  private api = new BaseApi();
  private url = '/image';

  async getImages(page: number): Promise<Array<ImageSchema>> {
    const response = await this.api.get(`${this.url}`, { page });
    return response;
  }
}
