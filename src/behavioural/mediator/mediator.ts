import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...newSellers: Seller[]): void {
    newSellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProduct | void {
    for (const seller of this.sellers) {
      const product = seller.sell(id);

      if (product) {
        console.log(`Here is the product: ${product.name}`);
        return product;
      }
    }

    console.log(`I cannot find any product with id ${id}`);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
