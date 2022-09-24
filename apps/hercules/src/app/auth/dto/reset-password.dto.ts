import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from '@dio/common';

export class ResetPasswordDto {
  @IsString()
  @MinLength(8, { message: 'Password too short' })
  @MaxLength(32, { message: 'Password is too long' })
  @Matches(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
    {
      message:
        'Password must contain at least one lowercase, one uppercase, one number, and one special character.',
    }
  )
  password: string;

  @Match(ResetPasswordDto, (s) => s.password)
  confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}
