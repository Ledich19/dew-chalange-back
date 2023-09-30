import { Module } from '@nestjs/common';
import { SheetModule } from './sheet/sheet.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SheetModule, PrismaModule],
})
export class AppModule {}
