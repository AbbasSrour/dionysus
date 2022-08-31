import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  registerUser(@Body() user: RegisterUserDto) {
    return this.service.registerUser(user);
  }

  // @UseGuards(LocalGuard)
  @Post('login')
  loginUser(@Req() req: any, @Body() user: LoginUserDto) {
    return req.session;
  }
}
