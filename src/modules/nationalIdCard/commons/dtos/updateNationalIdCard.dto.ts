import { EMaritalStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdateNationalIDCardDto {
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
  @IsEnum(EMaritalStatus)
  maritalStatus: EMaritalStatus;
}
