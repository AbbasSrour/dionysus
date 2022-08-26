import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { RegisterUserDto } from './dto';
import { User } from '../../prisma/client';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly client: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async createUser(input: RegisterUserDto): Promise<User> {
    return this.client.user.create({ data: input });
  }

  async findUserByEmail({ email }: { email: string }): Promise<User> {
    return this.client.user.findUniqueOrThrow({ where: { email: email } });
  }

  async findUserById(id: number): Promise<User | null> {
    return this.client.user.findUniqueOrThrow({ where: { userId: id } });
  }

  async createVerificationCode() {
    const verificationCode = crypto.randomBytes(32).toString('hex');
    const hashedVerificationCode = crypto
      .createHash('sha256')
      .update(verificationCode)
      .digest('hex');
    return { verificationCode, hashedVerificationCode };
  }

  async updateVerificationStatus(user: User, verified: boolean) {
    return this.client.user.update({
      where: { userId: user.userId },
      data: { verified },
    });
  }

  async updateVerificationCode(user: User, code: string | null) {
    return this.client.user.update({
      where: { userId: user.userId },
      data: { verificationCode: code },
    });
  }

  // async validateUser(input: LoginUserDto) {
  //   if (!input || !(await compare(input.password, user.password))) {
  //     throw new UnauthorizedException('Incorrect username or password');
  //   }
  //   const { password: _password, ...retUser } = user;
  //   return retUser;
  // }

  // async securePassword(password: string): Promise<string> {
  //   const hashedPassword: string = await HashPassword(password);
  //   password = await EncryptPassword(hashedPassword, env.ENC_KEY);
  //   return password;
  // }
  //
  // async comparePasswords(candidatePassword: string, encryptedPassword: string) {
  //   candidatePassword = await HashPassword(candidatePassword);
  //   const decryptedPassword = await DecryptPassword(
  //     encryptedPassword,
  //     env.ENC_KEY,
  //   );
  //   return await VerifyPassword(candidatePassword, decryptedPassword);
  // }

  // async signTokens(user: User) {
  //   await RedisClient.set(`${user.userId}`, JSON.stringify(user), {
  //     EX: env.REDIS_CACHE_EXPIRATION * 60,
  //   });
  //   const accessToken = await signJwt(
  //     { sub: user.userId },
  //     'accessTokenPrivateKey',
  //     {
  //       expiresIn: `${env.ACCESS_TOKEN_EXPIRATION}m`,
  //     },
  //   );
  //   const refreshToken = await signJwt(
  //     { sub: user.userId },
  //     'refreshTokenPrivateKey',
  //     {
  //       expiresIn: `${env.REFRESH_TOKEN_EXPIRATION}m`,
  //     },
  //   );
  //   return { accessToken, refreshToken };
  // }
}
