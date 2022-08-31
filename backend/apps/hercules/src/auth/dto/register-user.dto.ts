import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from '@app/common';

export class RegisterUserDto {
  @IsString()
  @MinLength(3, { message: 'Username too short' })
  @MaxLength(20, { message: 'Username is too long' })
  // @Matches(
  //   /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
  //   { message: 'No special characters or numbers allowed' },
  // )
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password too short' })
  @MaxLength(32, { message: 'Password is too long' })
  @Matches(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
    {
      message:
        'Password must contain at least one lowercase, one uppercase, one number, and one special character.',
    },
  )
  password: string;

  @Match(RegisterUserDto, (s) => s.password)
  confirmPassword: string;
}
