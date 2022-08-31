import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../common/prisma/prisma.service';
import { LocalStrategy } from './local.strategy';
import { AuthSerializer } from './serialization.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalStrategy, AuthSerializer],
})
export class AuthModule {}
