import { Controller, Get } from '@nestjs/common';
import { VoteService } from '../services/vote.service';

@Controller()
export class VoteController {
  constructor(private readonly voteService: VoteService) {}
}
