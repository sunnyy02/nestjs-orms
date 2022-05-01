import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('Cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  async fetchCats() {
    return this.catService.getAll();
  }

  @Get(':id')
  async fetchCatById(@Param('id') id: number) {
    return this.catService.cat({ id: id });
  }

  @Post()
  async createCat(@Body() dto: CreateCatDto) {
    return this.catService.createCat(dto);
  }
}
