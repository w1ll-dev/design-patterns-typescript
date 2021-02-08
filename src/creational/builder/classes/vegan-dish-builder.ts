import { MealBuilderContract } from '../interfaces/meal-builder-contract';
import { MealBox } from './meal-box';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderContract {
  private _meal: MealBox = new MealBox();
  makeDish(): this {
    const rice = new Rice('Arroz', 40);
    const beans = new Beans('Feijão', 35);
    this._meal.add(rice, beans);
    return this;
  }

  reset(): void {
    this._meal = new MealBox();
  }

  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
