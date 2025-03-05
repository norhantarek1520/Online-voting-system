import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from '../commons/dtos/index';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async update(userId: string, updateDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.prismaService.user.findUnique({ where: { id: userId } });

    if (existingUser) {
      throw new NotFoundException(`This user not found`);
    }

    return this.prismaService.user.update({ where: { id: userId }, data: { ...updateDto } });
  }

  public async delete(userId: string): Promise<void> {
    const existingUser = await this.prismaService.user.findUnique({ where: { id: userId } });

    if (existingUser) {
      throw new NotFoundException(`This user not found`);
    }

    await this.prismaService.user.delete({ where: { id: userId } });
  }

  public async getOne(userId: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`This user not found`);
    }
    return user;
  }

  public async getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  public async getOneByEmail(email: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { email: email } });
    if (!user) {
      throw new NotFoundException(`This user not found `);
    }
    return user;
  }

  public async getOneByNationalId(nationalId: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { userNationalId: nationalId } });
    if (!user) {
      throw new NotFoundException(`This user not found `);
    }
    return user;
  }
}
