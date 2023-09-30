import { Injectable } from '@nestjs/common';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { Ceil, Sheet } from './entities/sheet.entity';

@Injectable()
export class SheetService {
  async create(
    createSheetDto: CreateSheetDto,
    sheetId: string,
    cellId: string,
  ) {
    return `This action adds a new sheet #${cellId} ${sheetId} ${createSheetDto}` as Ceil;
  }

  async findAll(sheetId: string) {
    return `This action returns ${sheetId} all sheet` as Sheet;
  }

  async findOne(sheetId: string, cellId: string) {
    return `This action returns a #${cellId} ${sheetId} sheet` as Ceil;
  }
}
