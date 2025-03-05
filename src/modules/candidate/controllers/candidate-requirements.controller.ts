import { Controller } from '@nestjs/common';
import { CandidateRequirementsService } from '../services/candidate-requirements.service';

@Controller('candidate')
export class CandidateRequirementsController {
  constructor(private readonly candidateRequirementsService: CandidateRequirementsService) {}
}
