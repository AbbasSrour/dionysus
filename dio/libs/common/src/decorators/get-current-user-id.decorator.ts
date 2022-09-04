import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type JwtPayload = {
  email: string;
  sub: number;
};

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub;
  }
);
