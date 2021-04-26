export interface ShoppingOrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  awaitPayment(): void;
  shipOrder(): void;
}
