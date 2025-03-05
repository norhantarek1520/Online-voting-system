import { Controller, Get } from '@nestjs/common';
import { ElectionHistoryService } from '../services/election-history.service';

@Controller()
export class ElectionHistoryController {
  constructor(private readonly electionHistoryService: ElectionHistoryService) {}
}
