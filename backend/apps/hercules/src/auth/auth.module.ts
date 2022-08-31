import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  AccessTokenStrategy,
  RefreshTokenStrategy,
} from '../common/strategies';
import { RedisModuleConfig, RedisService } from '../common/redis';
import { JwtModule } from '@nestjs/jwt';
import { UserModule, UserService } from '../user';
import { EmailModule } from '../common/email';
import { PrismaModule } from '../common/prisma';
import { CryptoService } from './crypto.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    RedisService,
    UserService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    CryptoService,
  ],
  imports: [
    RedisModuleConfig,
    JwtModule,
    UserModule,
    EmailModule,
    PrismaModule,
  ],
})
export class AuthModule {}
