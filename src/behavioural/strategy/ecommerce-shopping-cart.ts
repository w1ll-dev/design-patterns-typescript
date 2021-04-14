import { DiscountStrategy } from './discount-strategy';
import { DefaultDiscount } from './discounts';
import { ECommerceProductProtocol } from './ecommerce-product-protocol';

export class ECommerceShoppingCart {
  protected products: ECommerceProductProtocol[] = [];
  protected _discountStrategy: DiscountStrategy = new DefaultDiscount();

  addProducts(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sumPrice, { price }) => sumPrice + price, 0);
  }

  getTotalWithDiscount(): number {
    const total = this.getTotal();
    return total - this._discountStrategy.getDiscount(this);
  }

  set discount(newDiscount: DiscountStrategy) {
    this._discountStrategy = newDiscount;
  }
}
