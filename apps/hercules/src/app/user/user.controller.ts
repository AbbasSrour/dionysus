import { Controller, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
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

  @Get('email/:email/available')
  async check(@Param('email') email: string) {
    const user = await this.userService.findUserByEmail({ email }).catch(() => null);
    if (!user) throw new NotFoundException({ message: 'email is not available' });
    return { exists: true };
  }
}
