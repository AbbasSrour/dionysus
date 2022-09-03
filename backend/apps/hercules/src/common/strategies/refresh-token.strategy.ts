import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { RedisService } from '../../common/redis/redis.service';
import { UserService } from '../../user/user.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly config: ConfigService,
    private readonly redis: RedisService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        RefreshTokenStrategy.extractJwtCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: config.get<string>('jwt.refreshToken.publicKey'),
      algorithms: 'RS256',
      passReqToCallback: true,
      ignoreExpiration: false,
    });
  }

  public static extractJwtCookie(req: Request): string | null {
    if (
      req.cookies &&
      'refresh_token' in req.cookies &&
      req.cookies.refresh_token.length > 0
    )
      return req.cookies.refresh_token;
    return null;
  }

  async validate(req: Request, payload: any) {
    // Check if the user has a valid session, and is not logged out
    const session = await this.redis.client.get(`${payload.sub}`);
    if (!session)
      throw new HttpException('Invalid token, or session has expired', 401);
    await this.redis.client.del(`${payload.userId}`);

    // TODO remove this for performance reasons, we are calling the psql database on every call while we can easily use the data in the redis cache, we just need to make sure to update them when user data changes
    //Check if user still exists
    const user = await this.userService.findUserById(
      JSON.parse(session).userId,
    );
    if (!user)
      throw new ForbiddenException({
        message: "Invalid token, user doesn't exist",
      });

    return user;
  }
}
