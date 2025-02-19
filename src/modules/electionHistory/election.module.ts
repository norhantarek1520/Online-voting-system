import { Module } from '@nestjs/common';
import { ElectionHistoryController } from './controllers/election-history.controller';
import { ElectionHistoryService } from './services/election-history.service';

@Module({
  controllers: [ElectionHistoryController],
  providers: [ElectionHistoryService],
  exports: [ElectionHistoryService],
})
export class ElectionHistoryModule {}
