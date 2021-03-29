/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(newProduct: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, product) => sum + product.getPrice(), 0);
  }

  add(...productsList: ProductComponent[]): void {
    productsList.forEach((newProduct) => this.children.push(newProduct));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }
}

// client-code
const shirt = new ProductLeaf('shirt', 20);
const bike = new ProductLeaf('bike', 200);
const phone = new ProductLeaf('phone', 2_000);

const productBox = new ProductComposite();
productBox.add(shirt, bike, phone);

const pen = new ProductLeaf('pen', 2);
const sword = new ProductLeaf('sword', 3_000);

const anotherBox = new ProductComposite();
anotherBox.add(pen, sword, productBox);

console.log(anotherBox);
console.log(anotherBox.getPrice());
