import BaseApi from './base.api';
import { ImageSchema } from '../schema/image.schema';

export class ImageApi {
  private api = new BaseApi('/image').getApi();

  async getImages(page: number) {
    const api = new BaseApi('').getApi();
    const response = await api.get('image', {
      searchParams: {
        page,
      },
    });
    return await response.json<Array<ImageSchema>>();
  }
}
