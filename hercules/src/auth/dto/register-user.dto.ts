import { IsEmail, IsString, Matches, Max, Min } from 'class-validator';
import { Match } from '../../common/decorators';

export class RegisterUserDto {
  @IsString()
  @Min(3, { message: 'Username too short' })
  @Max(20, { message: 'Username is too long' })
  @Matches(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
    { message: 'No special characters or numbers allowed' },
  )
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  @Min(8, { message: 'Password too short' })
  @Max(32, { message: 'Password is too long' })
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
