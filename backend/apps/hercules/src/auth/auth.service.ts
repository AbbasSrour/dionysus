import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { User } from '@prisma/client-hercules';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
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
          'jwt.refreshToken.privateKey',
        )}`,
        expiresIn: `${this.config.get<string>('jwt.refreshToken.expiration')}m`,
        algorithm: 'RS256',
      },
    );
    return { accessToken, refreshToken };
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
