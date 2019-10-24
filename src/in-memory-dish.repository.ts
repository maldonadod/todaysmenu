import { Injectable } from '@nestjs/common';
import { newDish, newSideDish } from 'platos';

@Injectable()
export class InMemoryDishRepository {
  getTodaysDishes(): any {
    return [
      newDish("Guiso de lentejas"),
      newDish("Bife de costillas")
        .addSideDish(newSideDish("puré de papas"))
        .addSideDish(newSideDish("papas fritas"))
        .addSideDish(newSideDish("papas españolas"))
        .addSideDish(newSideDish("ensalada mixta"))
    ]
  }
}
