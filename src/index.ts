import { MainDishBuilder } from './creational/builder/classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeDish().makeDessert();
console.log(mainDishBuilder.getMeal());
mainDishBuilder.reset();

const meal2Price = mainDishBuilder.makeBeverage().getPrice();
console.log(meal2Price);
