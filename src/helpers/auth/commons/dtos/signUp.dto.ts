import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Min, Validate } from 'class-validator';

import { PasswordMatchConstraint } from '../decorators/index';

export class SignUpDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  userNationalId: string;

  @IsNumber()
  @Min(18)
  age: Number;

  @IsString()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 10, { message: 'Password must be between 6 and 10 characters.' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Validate(PasswordMatchConstraint, ['password'])
  confirmPassword: string;
}
