import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();
seller1.addProducts(
  { id: '1', name: 'tshirt', price: 29.9 },
  { id: '2', name: 'jeans', price: 59.9 },
);

seller2.addProducts(
  { id: '3', name: 'car', price: 69000 },
  { id: '4', name: 'house', price: 590000 },
);

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('5');
buyer.viewProducts();
