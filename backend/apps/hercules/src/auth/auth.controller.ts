import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
import { UserService } from '../user';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '../common/email';
import { RedisService } from '../common/redis';
import { GetCurrentUser } from '@app/common';
import { CookieOptions, Response } from 'express';
import { User } from '@prisma/client-hercules';

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
        this.config.getOrThrow<number>('jwt.accessToken.expiration') *
          60 *
          1000,
    ),
    maxAge:
      this.config.getOrThrow<number>('jwt.accessToken.expiration') * 60 * 1000,
  };
  private readonly refreshTokenCookieOptions = {
    ...this.cookieOptions,
    expires: new Date(
      Date.now() +
        this.config.getOrThrow<number>('jwt.refreshToken.expiration') *
          60 *
          1000,
    ),
    maxAge:
      this.config.getOrThrow<number>('jwt.refreshToken.expiration') * 60 * 1000,
  };

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly config: ConfigService,
    private readonly email: EmailService,
    private readonly redis: RedisService,
  ) {}

  @Post('register/local')
  async registerUser(@Body() userDto: RegisterUserDto) {
    const user = await this.userService.createUser({
      userName: userDto.userName,
      email: userDto.email.toLowerCase(),
      password: await this.authService.securePassword(userDto.password),
    });
    if (!user) throw new BadRequestException();

    const { hashedVerificationCode, verificationCode } =
      await this.authService.createVerificationCode();

    await this.authService.updateVerificationCode(user, hashedVerificationCode);

    const redirectUrl = `${this.config.get<string>(
      'origin',
    )}/verifyemail/${verificationCode}`;

    try {
      await this.email.sendVerificationCode(user);
      return { message: 'Success, a verification link was sent to your email' };
    } catch (error) {
      const verificationCode = null;
      await this.authService.updateVerificationCode(user, verificationCode);
      console.log(error);

      throw new InternalServerErrorException({
        message: 'There was an error sending email, please try again',
      });
    }
  }

  @Post('/login/local')
  async loginUser(
    @Body() body: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email, password } = body;
    const user = await this.userService.findUserByEmail({ email });

    if (!user)
      throw new UnauthorizedException({ message: 'Invalid email or password' });

    if (
      !user ||
      !(await this.authService.comparePasswords(password, user.password))
    )
      throw new UnauthorizedException({ message: 'Invalid email or password' });

    if (!user.verified)
      throw new UnauthorizedException({ message: 'Account not verified' });

    const { accessToken, refreshToken } = await this.authService.signTokens(
      user,
    );

    res.cookie('access_token', accessToken, this.accessTokenCookieOptions);
    res.cookie('refresh_token', refreshToken, this.refreshTokenCookieOptions);
    res.cookie('logged_in', true, {
      ...this.accessTokenCookieOptions,
      httpOnly: false,
    });

    return { 'logged-in': true };
  }

  @Get('/refresh')
  async refreshAccessTokenHandler(
    @GetCurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const newTokens = await this.authService.signTokens(user);

    res.cookie(
      'access_token',
      newTokens.accessToken,
      this.accessTokenCookieOptions,
    );
    res.cookie(
      'refresh_token',
      newTokens.refreshToken,
      this.refreshTokenCookieOptions,
    );
    res.cookie('logged_in', true, {
      ...this.accessTokenCookieOptions,
      httpOnly: false,
    });
  }
}
