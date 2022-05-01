import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('Cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  async fetchCats(): Promise<Cat[]> {
    return this.catService.fetchAll();
  }

  @Get(':id')
  async fetchCatById(@Param('id') id: number): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Post()
  async createCat(@Body() dto: CreateCatDto): Promise<Cat> {
    return this.catService.createCat(dto);
  }
}
