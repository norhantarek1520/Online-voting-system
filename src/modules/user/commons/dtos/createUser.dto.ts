import { IsString, IsNotEmpty, IsEmail, IsOptional, IsInt, IsDate, IsEnum } from 'class-validator';
import { EUserRoles, EUserStatus } from '@prisma/client';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;

  @IsOptional()
  @IsEnum(EUserRoles)
  role?: EUserRoles;

  @IsOptional()
  @IsEnum(EUserStatus)
  status?: EUserStatus;

  @IsNotEmpty()
  @IsString()
  userNationalId: string;
}
