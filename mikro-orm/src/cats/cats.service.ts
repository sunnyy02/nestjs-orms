import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: EntityRepository<Cat>,
  ) {}

  async fetchAll(): Promise<Cat[]> {
    return this.catRepository.findAll();
  }

  async findOne(id: number): Promise<Cat> {
    const findOneOptions = {
      id: id,
    };
    return this.catRepository.findOne(findOneOptions);
  }

  async createCat(dto: CreateCatDto): Promise<Cat> {
    const { name, breed } = dto;

    const cat = new Cat(name, breed);
    await this.catRepository.persistAndFlush(cat);
    return cat;
  }
}
