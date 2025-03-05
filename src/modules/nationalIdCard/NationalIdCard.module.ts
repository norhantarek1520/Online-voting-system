import { Module } from '@nestjs/common';
import { NationalIdCardService } from './services/nationalIdCard.service';
import { NationalIdCardController } from './controllers/nationalIdCard.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [NationalIdCardService, PrismaService],
  controllers: [NationalIdCardController],
  exports: [NationalIdCardService],
})
export class NationalIdCardModule {}
