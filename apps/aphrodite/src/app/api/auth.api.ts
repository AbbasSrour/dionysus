import { BaseApi } from './base.api';
import { LoginInput, RegisterInput } from '../schema/auth.schema';
import { KyResponse } from 'ky';

export class AuthApi {
  private api = new BaseApi();
  private authUrl = '/auth';
  private userUrl = '/user';

  emailExists(email: string): Promise<boolean> {
    console.log('hello world');
    return new Promise((resolve, reject) => {
      this.api
        .get(`${this.userUrl}/email/${email}/available`)
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
    return await this.api.post(`${this.authUrl}/login/local`, {
      body: {
        email,
        password,
      },
    });
  }

  async register(input: RegisterInput): Promise<KyResponse> {
    const { email, password, userName, confirmPassword } = input;
    return await this.api.post(`${this.authUrl}/register/local`, {
      body: {
        email,
        password,
        userName,
        confirmPassword,
      },
    });
  }
}
