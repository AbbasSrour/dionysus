import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from '../../prisma/client';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user: User, done: (err: Error, user: { id: number }) => void) {
    done(null, { id: user.userId });
  }

  deserializeUser(
    payload: { id: number },
    done: (err: Error, user: Omit<User, 'password'>) => void,
  ) {
    const user = this.authService.findUserById(payload.id);
    done(null, user);
  }
}
