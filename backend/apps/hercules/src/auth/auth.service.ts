import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { User } from '@prisma/client-hercules';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '../common/redis';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from './crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly client: PrismaService,
    private readonly config: ConfigService,
    private readonly redis: RedisService,
    private readonly jwt: JwtService,
    private readonly crypto: CryptoService,
  ) {}

  async signTokens(user: User) {
    console.log(user);
    user.password = null;
    await this.redis.client.set(`${user.userId}`, JSON.stringify(user), {
      EX: this.config.getOrThrow<number>('redis.expiration') * 60,
    });

    const accessToken = await this.jwt.signAsync(
      { sub: user.userId },
      {
        secret: `${this.config.getOrThrow<string>(
          'jwt.accessToken.privateKey',
        )}`,
        expiresIn: `${this.config.get<number>('jwt.accessToken.expiration')}m`,
        algorithm: 'RS256',
      },
    );

    const refreshToken = await this.jwt.signAsync(
      { sub: user.userId },
      {
        secret: `${this.config.getOrThrow<string>(
        "jwt.refreshToken.privateKey"',
        )}`,
        expiresIn: `${this.config.get<string"jwt.refreshToken.expiration"n')}m`,
        algorithm"RS256"',
     },
    );
    return { accessToken, refreshToken };
  }

  async deleteSession(user: User) {
    return await this.redis.client.del(`${user.userId}`).then(
      (resolve) => true,
      (reject) => false,
    );
  }

  async updateVerificationStatus(userId: number, verified: boolean) {
    console.log(userId);
    return this.client.user.update({
      where: { userId },
      data: { verified },
    });
  }

  async createVerificationCode(user: User) {
    user.password = null;
    const verificationCode = await this.jwt.signAsync(
      {
        sub: user.userId,
        email: user.email,
        userName: user.userName,
      },
      {
        secret: `${this.config.getOrThrow<string>(
          'jwt.accessToken.privateKey',
        )}`,
        expiresIn: `${60}m`,
        algorithm: 'RS256',
      },
    );
    await this.redis.client.set(`${verificationCode}`, JSON.stringify(user), {
      EX: 60 * 60,
    });
    return verificationCode;
  }

  async deleteVerificationCode(verificationCode: string) {
    await this.redis.client.del(`${verificationCode}`);
  }

  async verifyToken(token: string) {
    let check = this.redis.client.get(`${token}`);
    if (!check) return null;

    return await this.jwt.verifyAsync(token, {
      secret: this.config.getOrThrow('jwt.accessToken.publicKey'),
      algorithms: ['RS256'],
    });
  }

  async securePassword(password: string): Promise<string> {
    const hashedPassword: string = await this.crypto.HashPassword(password);
    return await this.crypto.EncryptPassword(
      hashedPassword,
      this.config.getOrThrow<string>('encKey'),
    );
  }

  async comparePasswords(candidatePassword: string, encryptedPassword: string) {
    const decryptedPassword = await this.crypto.DecryptPassword(
      encryptedPassword,
      this.config.getOrThrow('encKey'),
    );
    return await this.crypto.VerifyPassword(
      candidatePassword,
      decryptedPassword,
    );
  }
}
