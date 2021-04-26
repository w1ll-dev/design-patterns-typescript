import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('I cannot approve the payment because the order is rejected.');
  }

  rejectPayment(): void {
    console.log('The order is already in reject payment state.');
  }

  awaitPayment(): void {
    console.log('I cannot await the payment because the order is rejected.');
  }

  shipOrder(): void {
    console.log('You cannot send the order to client with a rejected payment.');
  }
}
