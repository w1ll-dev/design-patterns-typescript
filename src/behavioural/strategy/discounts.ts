import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total > 0 && total <= 100) {
      this.discount = 10;
    } else if (total > 100 && total <= 200) {
      this.discount = 20;
    } else if (total > 200) {
      this.discount = 30;
    }

    return this.discount;
  }
}

export class PremiumDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total > 0 && total <= 100) {
      this.discount = 20;
    } else if (total > 100 && total <= 200) {
      this.discount = 40;
    } else if (total > 200) {
      this.discount = 60;
    }

    return this.discount;
  }
}
