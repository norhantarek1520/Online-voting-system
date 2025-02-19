import { Controller, Get } from '@nestjs/common';
import { ElectionService } from '../services/election.service';

@Controller()
export class ElectionController {
  constructor(private readonly electionService: ElectionService) {}
}
