import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
import { UserService } from '../user';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '../common/email';
import { GetCurrentUser } from '@dio/common';
import { CookieOptions, Response } from 'express';
import { User } from '@prisma/client-hercules';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshTokenGuard } from '../common/guards';

@Controller('auth')
export class AuthController {
  // Cookies
  private cookieOptions: CookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: this.config.get('environment') === 'production',
  };
  private readonly accessTokenCookieOptions = {
    ...this.cookieOptions,
    expires: new Date(
      Date.now() +
        this.config.getOrThrow<number>('jwt.accessToken.expiration') * 60 * 1000,
    ),
    maxAge: this.config.getOrThrow<number>('jwt.accessToken.expiration') * 60 * 1000,
  };
  private readonly refreshTokenCookieOptions = {
    ...this.cookieOptions,
    expires: new Date(
      Date.now() +
        this.config.getOrThrow<number>('jwt.refreshToken.expiration') * 60 * 1000,
    ),
    maxAge: this.config.getOrThrow<number>('jwt.refreshToken.expiration') * 60 * 1000,
  };

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly config: ConfigService,
    private readonly email: EmailService,
  ) {}

  @Post('register/local')
  async registerUser(@Body() userDto: RegisterUserDto) {
    const user = await this.userService.createUser({
      userName: userDto.userName,
      email: userDto.email.toLowerCase(),
      password: await this.authService.securePassword(userDto.password),
    });
    if (!user) throw new BadRequestException();

    user.password = null;
    const verificationCode = await this.authService.createVerificationCode(user);

    try {
      await this.email.sendVerificationCode(user, verificationCode);
      return { message: 'Success, a verification link was sent to your email' };
    } catch (error) {
      await this.authService.deleteVerificationCode(verificationCode);
      console.log(error);
      throw new InternalServerErrorException({
        message: 'There was an error sending email, please try again',
      });
    }
  }

  @Post('/login/local')
  @HttpCode(200)
  async loginUser(@Body() body: LoginUserDto, @Res({ passthrough: true }) res: Response) {
    const { email, password } = body;
    const user = await this.userService.findUserByEmail({ email });

    if (!user) throw new UnauthorizedException({ message: 'Invalid email or password' });

    if (!user || !(await this.authService.comparePasswords(password, user.password)))
      throw new UnauthorizedException({ message: 'Invalid email or password' });

    if (!user.verified)
      throw new UnauthorizedException({ message: 'Account not verified' });

    const { accessToken, refreshToken } = await this.authService.signTokens(user);

    res.cookie('access_token', accessToken, this.accessTokenCookieOptions);
    res.cookie('refresh_token', refreshToken, this.refreshTokenCookieOptions);
    res.cookie('logged_in', true, {
      ...this.accessTokenCookieOptions,
      httpOnly: false,
    });

    return { 'logged-in': true };
  }

  @Get('/logout')
  async logoutUser(
    @GetCurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.deleteSession(user);

    res.cookie('accessToken', '', { maxAge: -1 });
    res.cookie('refreshToken', '', { maxAge: -1 });
    res.cookie('logged_in', '', { maxAge: -1 });

    return;
  }

  @Get('/refresh-tokens')
  @UseGuards(RefreshTokenGuard)
  async refreshTokens(
    @GetCurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log(user);
    user.password = null;
    const newTokens = await this.authService.signTokens(user);

    res.cookie('access_token', newTokens.accessToken, this.accessTokenCookieOptions);
    res.cookie('refresh_token', newTokens.refreshToken, this.refreshTokenCookieOptions);
    res.cookie('logged_in', true, {
      ...this.accessTokenCookieOptions,
      httpOnly: false,
    });
  }

  @Get('/email/verify/:token')
  async verifyEmail(@Param('token') token: string) {
    const payload = await this.authService.verifyToken(token);
    if (!payload) throw new HttpException('Could not verify email', 401);

    await this.authService.updateVerificationStatus(payload.sub, true);
    return 'Success';
  }

  //TODO: Delete from redis the key
  @Get('/email/resend-verification/:email')
  async resendEmailVerificationCode(@Param('email') email: string) {
    const user = await this.userService.findUserByEmail({ email });
    user.password = null;
    console.log(user);
    const verificationCode = await this.authService.createVerificationCode(user);
    await this.email.sendVerificationCode(user, verificationCode);
    return { message: 'Success, a verification link was sent to your email' };
  }

  @Get('/forgot-password/:email')
  async forgotPassword(@Param('email') email: string) {
    const user = await this.userService.findUserByEmail({ email });
    user.password = null;
    const verificationCode = await this.authService.createVerificationCode(user);
    await this.email.sendPasswordResetToken(user, verificationCode);
    return { message: 'Success, a verification link was sent to your email' };
  }

  @Patch('/reset-password/:email')
  async resetPassword(@Body() body: ResetPasswordDto, @Param('email') email: string) {
    const user = await this.userService.findUserByEmail({ email });
    const verify = this.authService.verifyToken(body.token);
    if (verify) await this.authService.deleteVerificationCode(body.token);

    await this.userService.updatePassword(
      user.email,
      await this.authService.securePassword(body.password),
    );
    user.password = null;
    return user;
  }
}
