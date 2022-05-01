import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  providers: [CatsService, PrismaService],
  controllers: [CatsController],
})
export class CatsModule {}
