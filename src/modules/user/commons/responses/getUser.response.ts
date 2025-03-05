import { EUserRoles, EUserStatus } from '@prisma/client';

export class UserResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  age?: number;
  dateOfBirth: Date;
  role: EUserRoles;
  status: EUserStatus;
  userNationalId: string;
  createdAt: Date;
  updatedAt: Date;
}
