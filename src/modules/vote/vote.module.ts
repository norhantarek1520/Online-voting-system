import { Module } from '@nestjs/common';
import { VoteController } from './controllers/vote.controller';
import { VoteService } from './services/vote.service';
@Module({
  controllers: [VoteController],
  providers: [VoteService],
  exports: [VoteService],
})
export class VoteModule {}
