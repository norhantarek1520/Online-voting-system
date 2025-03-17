import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SignUpDto, LoginDto } from '../commons/dtos/index';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  public async signUp(signupDto: SignUpDto) {
    const existingNationalId = this.prismaService.nationalIDCards.findUnique({
      where: { nationalId: signupDto.nationalId },
    });

    if (existingNationalId == null)
      throw new NotFoundException(`This national Id (${signupDto.nationalId})is not found`);

    // const existingEmail = this.prismaService.user.findUnique({ where: { email: signupDto.email } });
    // if (existingEmail == null) throw new NotFoundException(`This email (${signupDto.email})is already exist`);

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(signupDto.password, saltOrRounds);

    const user = await this.prismaService.user.create({
      data: {
        firstName: signupDto.firstName,
        lastName: signupDto.lastName,
        userName: signupDto.userName,
        email: signupDto.email,
        password: hashedPassword,
        age: signupDto.age,
        dateOfBirth: signupDto.dateOfBirth,

        nationalIdCard: {
          connect: { nationalId: signupDto.nationalId }, // Establish the relation
        },
      },
      include: {
        nationalIdCard: true, // Include the related NationalIDCards in the response
      },
    });
    return user;

    // Generate token with user id
  }
  public async login(loginDto: LoginDto) {}

  // public forgetPassword() {}
  // public resetPassword() {}
  // public updatePassword() {}

  private async comparePassword(hashedPassword: string, plainTextPassword: string) {
    if (!plainTextPassword || !hashedPassword) {
      throw new Error('Both plainTextPassword and hashedPassword are required');
    }
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
