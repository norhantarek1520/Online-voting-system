import { Module } from '@nestjs/common';
import { NationalIdCardService } from './services/nationalIdCard.service';
import { NationalIdCardController } from './controllers/nationalIdCard.controller';

@Module({
  providers: [NationalIdCardService],
  controllers: [NationalIdCardController],
  exports: [NationalIdCardService],
})
export class NationalIdCardModule {}
