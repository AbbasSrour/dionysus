import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { UserService } from '../../user';
import { RedisService } from '../redis';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-access',
) {
  constructor(
    private readonly config: ConfigService,
    private readonly redis: RedisService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        AccessTokenStrategy.extractJwtCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: config.get<string>('jwt.accessToken.publicKey'),
      algorithms: 'RS256',
      passReqToCallback: true,
      ignoreExpiration: true,
    });
  }

  public static extractJwtCookie(req: Request): string | null {
    if (
      req.cookies &&
      'access_token' in req.cookies &&
      req.cookies.access_token.length > 0
    )
      return req.cookies.access_token;
    return null;
  }

  async validate(req: Request, payload: any) {
    // Check if the user has a valid session
    const session = await this.redis.client.get(`${payload.sub}`);
    if (!session)
      throw new HttpException('Invalid token, or session has expired', 401);

    // TODO remove this for performance reasons, we are calling the psql database on every call while we can easily use the data in the redis cache, we just need to make sure to update them when user data changes
    // Check if user still exists
    const user = await this.userService.findUserById(
      JSON.parse(session).userId,
    );
    if (!user)
      throw new ForbiddenException({
        message: "Invalid token, user doesn't exist",
      });

    // Check if user is verified
    if (!user.verified)
      throw new ForbiddenException({ message: 'Account not verified' });

    return user;
  }
}
