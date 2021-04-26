import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  awaitPayment(): void {
    console.log('The order is already in await payment state.');
  }

  shipOrder(): void {
    console.log('I cannot send the order to client with a pending payment.');
  }
}
