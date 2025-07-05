class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  isAvailable(requestedQuantity) {
    return this.quantity >= requestedQuantity;
  }
}

class ExpirableProduct extends Product {
  constructor(name, price, quantity, expiryDate) {
    super(name, price, quantity);
    this.expiryDate = new Date(expiryDate);
  }

  isExpired() {
    return new Date() > this.expiryDate;
  }
}

class ShippableProduct extends Product {
  constructor(name, price, quantity, weight) {
    super(name, price, quantity);
    this.weight = weight;
  }
}

// Explicit exports
module.exports.Product = Product;
module.exports.ExpirableProduct = ExpirableProduct;
module.exports.ShippableProduct = ShippableProduct;