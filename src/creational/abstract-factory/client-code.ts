import { IndividualCostumerVehicleFactory } from './factories/individual-costumer-vehicle-factory';
import { InterpriseCostumerVehicleFactory } from './factories/interprise-costumer-vehicle-factory';

const interpriseCarFactory = new InterpriseCostumerVehicleFactory();
const individualCarFactory = new IndividualCostumerVehicleFactory();

const car1 = individualCarFactory.createVehicle('Fusca', 'Felipe');
const car2 = interpriseCarFactory.createVehicle('Celta', 'Will');

car1.pickUp();
car2.pickUp();
