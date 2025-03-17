import { EMaritalStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateNationalIDCardDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  religion?: string;

  @IsOptional()
  @IsString()
  occupation?: string;

  @IsOptional()
  @IsEnum(EMaritalStatus)
  maritalStatus?: EMaritalStatus;
}
