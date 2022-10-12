import { LoginInput, RegisterInput } from '../schema/auth.schema';
import { KyResponse } from 'ky';
import BaseApi from './base.api';

export class AuthApi {
  private api = new BaseApi('/auth').getApi();

  emailExists(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.api
        .get(`email/available/${email}`)
        .then((res) => {
          resolve(false);
        })
        .catch(async (error) => {
          if ((await error.response.json()).message === 'email is not available') {
            resolve(true);
          }
        });
    });
  }

  async login(input: LoginInput) {
    const { email, password } = input;
    return this.api.post(`login/local`, {
      json: {
        email,
        password,
      },
    });
  }

  async register(input: RegisterInput): Promise<KyResponse> {
    const { email, password, userName, confirmPassword } = input;
    return this.api.post(`register/local`, {
      json: {
        email,
        password,
        userName,
        confirmPassword,
      },
    });
  }
}
