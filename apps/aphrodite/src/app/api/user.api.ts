import { BaseApi } from './base.api';

export class UserApi {
  private url = '/user';
  private api = new BaseApi();

  async getCurrentUser() {
    console.log('hello world');
    return this.api.get(this.url);
  }
}
