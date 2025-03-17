import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, Length, min, Min, MinDate, Validate } from 'class-validator';

import { PasswordMatchConstraint } from '../decorators/index';
import { Transform } from 'class-transformer';

export class SignUpDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  nationalId: string;

  @IsNumber()
  @Min(18)
  age: number;

  @IsDate()
  @MinDate(
    () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 18); // Set the date to 18 years ago
      return date;
    },
    { message: 'You must be at least 18 years old.' },
  )
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value; // If it's already a Date, leave it as is
  })
  dateOfBirth: Date;

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
