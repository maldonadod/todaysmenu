import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDishRepository } from './in-memory-dish.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, InMemoryDishRepository],
})
export class AppModule {}
