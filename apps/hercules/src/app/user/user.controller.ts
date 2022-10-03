import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetCurrentUser } from '@dio/common';
import { User } from '@prisma/client-hercules';
import { AccessTokenGuard } from '../common/guards';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AccessTokenGuard)
  async getMe(@GetCurrentUser() user: User) {
    console.log(user);
    return user;
  }
}
