import { MealBuilderContract } from '../interfaces/meal-builder-contract';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderContract {
  private _meal: MealBox = new MealBox();
  makeDish(): this {
    const rice = new Rice('Arroz', 40);
    const meat = new Meat('Carne', 60);
    const beans = new Beans('Feijão', 35);
    this._meal.add(rice, meat, beans);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Suco', 15);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Pudim', 6);
    this._meal.add(dessert);
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
