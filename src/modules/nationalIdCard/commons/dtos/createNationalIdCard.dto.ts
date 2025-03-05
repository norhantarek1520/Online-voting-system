import { EGender, EMaritalStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

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
  @Type(() => Date) // Ensures the date string is converted to a Date object.
  dateOfBirth: Date;
}
