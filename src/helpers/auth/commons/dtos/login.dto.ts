import { IsNotEmpty, IsString, Length, Validate } from 'class-validator';
import { EmailOrNationalIdConstraint } from '../decorators/index';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Validate(EmailOrNationalIdConstraint)
  key: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 10, { message: 'Password must be between 6 and 10 characters.' })
  password: string;
}
