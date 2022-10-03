import ky from 'ky';
import { KyInstance } from 'ky/distribution/types/ky';

export default class BaseApi {
  private readonly baseUrl = 'http://localhost:2000/api';
  private readonly url: string;

  constructor(prefix: string) {
    this.url = this.baseUrl + prefix;
  }

  getApi(): KyInstance {
    return ky.create({
      prefixUrl: this.url,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
