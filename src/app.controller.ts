import { Get, Controller, Res } from '@nestjs/common';
import { InMemoryDishRepository } from './in-memory-dish.repository';
import { ShowOffersUseCase } from 'platos';
import { Response } from 'express';
import View from './view';

const getCurrentTime = () => new Date()
const deadline = new Date(new Date().setHours(0, 2, 5))

@Controller()
export class AppController {
  res = null
  constructor(private readonly repo: InMemoryDishRepository) {}
  @Get("todays-menu")
  root(@Res() res: Response) {
    ShowOffersUseCase(this.repo, new View(res), getCurrentTime, deadline);
  }
}
