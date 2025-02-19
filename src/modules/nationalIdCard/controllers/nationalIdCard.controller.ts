import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NationalIdCardService } from '../services/nationalIdCard.service';

@Controller()
export class NationalIdCardController {
  constructor(private readonly nationalIdCardService: NationalIdCardService) {}
}
