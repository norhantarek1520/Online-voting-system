import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/modules/user/user.module';
import { NationalIdCardModule } from 'src/modules/nationalIdCard/NationalIdCard.module';

@Module({
  imports: [UserModule, NationalIdCardModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
