import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeDish().makeDessert();
console.log(mainDishBuilder.getMeal());
mainDishBuilder.reset();

const meal2Price = mainDishBuilder.makeBeverage().getPrice();
console.log(meal2Price);

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeDish();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
