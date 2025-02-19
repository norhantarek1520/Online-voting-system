import { Module } from '@nestjs/common';
import { CandidateController } from './controllers/candidate.controller';
import { CandidateService } from './services/candidate.service';
import { CandidateRequirementsController } from './controllers/candidate-requirements.controller';
import { CandidateRequirementsService } from './services/candidate-requirements.service';

@Module({
  controllers: [CandidateController, CandidateRequirementsController],
  providers: [CandidateService, CandidateRequirementsService],
  exports: [CandidateService, CandidateRequirementsService],
})
export class CandidateModule {}
