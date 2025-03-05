import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNationalIDCardDto, UpdateNationalIDCardDto } from '../commons/dtos/index';
import { NationalIDCards } from '@prisma/client';

@Injectable()
export class NationalIdCardService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createDto: CreateNationalIDCardDto): Promise<NationalIDCards> {
    const nationalId = this.generateNationalId(createDto.dateOfBirth);

    return this.prismaService.nationalIDCards.create({
      data: { ...createDto, nationalId },
    });
  }

  public async update(cardId: string, updateDto: UpdateNationalIDCardDto): Promise<NationalIDCards> {
    const existingCard = await this.prismaService.nationalIDCards.findUnique({ where: { id: cardId } });

    if (!existingCard) {
      throw new NotFoundException(`National ID Card with ID ${cardId} not found`);
    }

    return this.prismaService.nationalIDCards.update({ where: { id: cardId }, data: updateDto });
  }

  public async delete(cardId: string): Promise<void> {
    const existingCard = await this.prismaService.nationalIDCards.findUnique({ where: { id: cardId } });

    if (!existingCard) {
      throw new NotFoundException(`National ID Card with ID ${cardId} not found`);
    }

    await this.prismaService.nationalIDCards.delete({ where: { id: cardId } });
  }

  public async getOne(cardId: string): Promise<NationalIDCards> {
    const card = await this.prismaService.nationalIDCards.findUnique({ where: { id: cardId } });

    if (!card) {
      throw new NotFoundException(`National ID Card with ID ${cardId} not found`);
    }

    return card;
  }

  public async getAll(): Promise<NationalIDCards[]> {
    return this.prismaService.nationalIDCards.findMany();
  }

  public async getOneByNationalId(nationalId: string): Promise<NationalIDCards> {
    const card = await this.prismaService.nationalIDCards.findUnique({ where: { nationalId: nationalId } });
    if (!card) {
      throw new NotFoundException(`There is no card for this national Id `);
    }
    return card;
  }

  private generateNationalId(dateOfBirth: Date): string {
    const id = Math.random().toString(36).substring(2, 10); // Random ID
    const dateOfBirthStr = dateOfBirth.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    return `${id}_${dateOfBirthStr}`;
  }
}
