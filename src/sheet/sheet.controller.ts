import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { Sheet, Ceil } from './entities/sheet.entity';

@Controller()
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Post(':sheet_id/:cell_id')
  create(
    @Body() createSheetDto: CreateSheetDto,
    @Param('sheet_id') sheetId: string,
    @Param('cell_id') cellId: string,
  ): Promise<Ceil> {
    return this.sheetService.create(createSheetDto, sheetId, cellId);
  }
  @Get(':sheet_id')
  findAll(@Param('sheet_id') sheet_id: string): Promise<Sheet> {
    return this.sheetService.findAll(sheet_id);
  }

  @Get(':sheet_id/:cell_id')
  findOne(
    @Param('sheet_id') sheetId: string,
    @Param('cell_id') cellId: string,
  ): Promise<Ceil> {
    return this.sheetService.findOne(sheetId, cellId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSheetDto: UpdateSheetDto) {
  //   return this.sheetService.update(+id, updateSheetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sheetService.remove(+id);
  // }
}
