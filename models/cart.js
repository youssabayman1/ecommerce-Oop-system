class Cart {
  constructor() {
    this.items = [];
  }

  add(product, quantity) {
    if (!product.isAvailable(quantity)) {
      throw new Error(`Not enough ${product.name} in stock`);
    }
    if (product instanceof require('./product').ExpirableProduct && product.isExpired()) {
      throw new Error(`${product.name} has expired`);
    }
    this.items.push({ product, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }
}

// Export as constructor
module.exports = Cart;