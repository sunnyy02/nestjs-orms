import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsRepository.create<Cat>({ ...createCatDto });
  }

  findOne(id: string): Promise<Cat> {
    return this.catsRepository.findOne({
      where: {
        id,
      },
    });
  }
}
