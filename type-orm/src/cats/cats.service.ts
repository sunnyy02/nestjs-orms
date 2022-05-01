import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;
    cat.breed = createCatDto.breed;
    return this.catsRepository.save<Cat>(cat);
  }

  findOne(id: string): Promise<Cat> {
    return this.catsRepository.findOne({
      where: {
        id,
      },
    });
  }
}
