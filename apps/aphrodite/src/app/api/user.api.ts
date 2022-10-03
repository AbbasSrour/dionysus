import { KyResponse } from 'ky';
import BaseApi from './base.api';

export class UserApi {
  private api = new BaseApi('/user').getApi();

  async getCurrentUser(): Promise<KyResponse> {
    return this.api.get('');
  }
}
