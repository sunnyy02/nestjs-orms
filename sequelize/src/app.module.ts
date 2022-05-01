import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [DatabaseModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
