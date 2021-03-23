import { randomVehicleAlgorithm } from './main/main';
import { randomNumber } from './utils/random-numbers';

const costumersNames = ['Will', 'Felipe', 'Alan', 'Ruben'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const randomCostumer = costumersNames[randomNumber(costumersNames.length)];
  vehicle.pickUp(randomCostumer);
  vehicle.stop();
}
