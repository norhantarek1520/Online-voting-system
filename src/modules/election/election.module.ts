import { Module } from '@nestjs/common';
import { ElectionController } from './controllers/election.controller';
import { ElectionService } from './services/election.service';

@Module({
  controllers: [ElectionController],
  providers: [ElectionService],
  exports: [ElectionService],
})
export class ElectionModule {}
