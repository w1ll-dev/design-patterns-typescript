import { PremiumDiscount } from './discounts';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

const shoppingCart = new ECommerceShoppingCart();

shoppingCart.addProducts(
  { name: 'tshirt', price: 20 },
  { name: 'jeans', price: 80 },
);

shoppingCart.discount = new PremiumDiscount();

console.log({
  shoppingCart,
  total: shoppingCart.getTotal(),
  totalWithDiscount: shoppingCart.getTotalWithDiscount(),
});
