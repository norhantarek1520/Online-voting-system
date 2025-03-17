import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException } from '@nestjs/common';
import { NationalIdCardService } from '../services/nationalIdCard.service';
import { CreateNationalIDCardDto, UpdateNationalIDCardDto } from '../commons/dtos';
import { NationalIDCards } from '@prisma/client';

@Controller('national-id-cards')
export class NationalIdCardController {
  constructor(private readonly nationalIdCardService: NationalIdCardService) {}

  /**
   * Create a new National ID Card.
   * @param createDto - Data to create the National ID Card.
   * @returns The created National ID Card.
   */
  @Post()
  async create(@Body() createDto: CreateNationalIDCardDto): Promise<NationalIDCards> {
    return this.nationalIdCardService.create(createDto);
  }

  /**
   * Update an existing National ID Card.
   * @param cardId - ID of the National ID Card to update.
   * @param updateDto - Data to update the National ID Card.
   * @returns The updated National ID Card.
   */
  @Put(':id')
  async update(@Param('id') cardId: string, @Body() updateDto: UpdateNationalIDCardDto): Promise<NationalIDCards> {
    return this.nationalIdCardService.update(cardId, updateDto);
  }

  /**
   * Delete a National ID Card.
   * @param cardId - ID of the National ID Card to delete.
   */
  @Delete(':id')
  async delete(@Param('id') cardId: string): Promise<void> {
    return this.nationalIdCardService.delete(cardId);
  }

  /**
   * Get a National ID Card by ID.
   * @param cardId - ID of the National ID Card to retrieve.
   * @returns The National ID Card.
   */
  @Get(':id')
  async getOne(@Param('id') cardId: string): Promise<NationalIDCards> {
    return this.nationalIdCardService.getOne(cardId);
  }

  /**
   * Get all National ID Cards.
   * @returns A list of all National ID Cards.
   */
  @Get()
  async getAll(): Promise<NationalIDCards[]> {
    return this.nationalIdCardService.getAll();
  }

  /**
   * Get a National ID Card by National ID.
   * @param nationalId - National ID of the card to retrieve.
   * @returns The National ID Card.
   */
  @Get('national-id/:nationalId')
  async getOneByNationalId(@Param('nationalId') nationalId: string): Promise<NationalIDCards> {
    return this.nationalIdCardService.getOneByNationalId(nationalId);
  }
}
