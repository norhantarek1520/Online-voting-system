import { IsOptional, IsEnum } from 'class-validator';
import { EUserRoles, EUserStatus } from '@prisma/client';

export class UpdateUserDto {
  @IsOptional()
  @IsEnum(EUserRoles)
  role?: EUserRoles;

  @IsOptional()
  @IsEnum(EUserStatus)
  status?: EUserStatus;
}
