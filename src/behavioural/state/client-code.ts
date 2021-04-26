import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); //pending
order.approvePayment(); // approved
order.rejectPayment(); // rejected
order.shipOrder(); //sending
order.awaitPayment(); // await
