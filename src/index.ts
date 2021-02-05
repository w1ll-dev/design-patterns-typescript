import { MealBox } from './creational/builder/classes/meal-box';
import { Beans, Meat, Rice } from './creational/builder/classes/meals';

const rice = new Rice('Arroz', 10);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);
const mealBox = new MealBox();

mealBox.addMeal(rice, beans, meat);

console.log(mealBox.getPrice());
