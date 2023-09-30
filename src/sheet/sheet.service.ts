import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { Ceil, Sheet } from './entities/sheet.entity';

@Injectable()
export class SheetService {
  async create(
    createSheetDto: CreateSheetDto,
    sheetId: string,
    cellId: string,
  ) {
    return `This action adds a new sheet #${cellId} ${sheetId} ${createSheetDto}` as unknown as Ceil;
  }

  async findAll(sheetId: string) {
    try {
      return `This action returns ${sheetId} all sheet` as unknown as Sheet;
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException('Artist not found');
    }
  }

  async findOne(sheetId: string, cellId: string) {
    return `This action returns a #${cellId} ${sheetId} sheet` as unknown as Ceil;
  }
}
