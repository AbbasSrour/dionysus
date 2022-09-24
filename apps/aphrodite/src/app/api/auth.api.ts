import { BaseApi } from './base.api';
import { LoginInput, RegisterInput } from '../schema/auth.schema';

export class AuthApi {
  private api = new BaseApi();
  private url = '/auth';

  emailExists(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.api
        .get(`users/${email}/available`)
        .then((res) => {
          resolve(true);
        })
        .catch(async (error) => {
          if ((await error.response.json()).data.message === 'email is not available') {
            resolve(false);
          }
        });
    });
  }

  async login(input: LoginInput) {
    const { email, password } = input;
    await this.api.post(`${this.url}/login`, {
      body: {
        json: {
          email,
          password,
        },
      },
    });
  }

  async register(input: RegisterInput) {
    const { email, password, userName, confirmPassword } = input;
    await this.api.post(`${this.url}/register`, {
      body: {
        json: {
          email,
          password,
          userName,
          confirmPassword,
        },
      },
    });
  }
}
