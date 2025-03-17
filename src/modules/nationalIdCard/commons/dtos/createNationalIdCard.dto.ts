import { EGender, EMaritalStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString, MinDate } from 'class-validator';

export class CreateNationalIDCardDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  religion: string;

  @IsString()
  @IsNotEmpty()
  occupation: string;

  @IsNotEmpty()
  @IsEnum(EGender)
  gender: EGender;

  @IsNotEmpty()
  @IsEnum(EMaritalStatus)
  maritalStatus: EMaritalStatus;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value; // If it's already a Date, leave it as is
  })
  dateOfBirth: Date;
}
