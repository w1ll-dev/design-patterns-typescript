import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach(({ id, name, price }) =>
      console.log(`id: ${id} | name: ${name} | price: ${price}`),
    );
  }

  addProducts(...newProducts: SellerProduct[]): void {
    newProducts.forEach((product) => this.products.push(product));
  }

  setMediator(newMediator: Mediator): void {
    this.mediator = newMediator;
  }

  sell(productId: string): SellerProduct | void {
    const productIdIndex = this.products.findIndex(
      ({ id }) => id === productId,
    );

    if (productIdIndex !== -1)
      return this.products.splice(productIdIndex, 1)[0];
  }

  viewProducts(): void {
    if (!this.mediator) return;
    this.mediator.showProducts();
  }

  buy(id: string): void {
    if (!this.mediator) return;
    this.mediator.buy(id);
  }
}
