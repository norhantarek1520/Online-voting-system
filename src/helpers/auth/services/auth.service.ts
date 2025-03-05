import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SignUpDto, LoginDto } from '../commons/dtos/index';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  public async signUp(signupDto: SignUpDto) {}
  public async login(loginDto: LoginDto) {}

  // public forgetPassword() {}
  // public resetPassword() {}
  // public updatePassword() {}
}
