import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // this is a facade method to /src/creational/builder/client-code.ts
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeDish().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
    this.mainDishBuilder.reset();
  }

  makeMeal2(): void {
    const meal2Price = this.mainDishBuilder.makeBeverage().getPrice();
    console.log(meal2Price);
  }

  makeMeal3(): void {
    this.veganDishBuilder.makeDish();
    console.log(this.veganDishBuilder.getMeal());
    console.log(this.veganDishBuilder.getPrice());
  }
}
