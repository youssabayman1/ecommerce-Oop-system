const path = require('path');
const product = require(path.join(__dirname, 'models', 'product'));
const Cart = require(path.join(__dirname, 'models', 'cart'));
const Customer = require(path.join(__dirname, 'models', 'customer'));
const checkout = require(path.join(__dirname, 'models', 'checkout'));


const biscuits = new product.Product("Biscuits", 50, 10);
const cheese = new product.ExpirableProduct("Cheese", 100, 5, "2025-08-01");
const scratchCard = new product.Product("Scratch Card", 50, 20);


const customer1 = new Customer("Ahmed", 500);
const customer2 = new Customer("Youssab", 1000);  // Second customer with higher balance

// Create carts
const cart1 = new Cart();
const cart2 = new Cart();


cart1.add(cheese, 2);
cart1.add(biscuits, 1);
cart1.add(scratchCard, 1);


cart2.add(cheese, 1);
cart2.add(scratchCard, 3);


console.log("\n=== Processing Customer 1 ===");
try {
  const receipt1 = checkout(customer1, cart1);
  console.log("Purchase successful:", receipt1);
} catch (error) {
  console.error("Checkout failed:", error.message);
}


console.log("\n=== Processing Customer 2 ===");
try {
  const receipt2 = checkout(customer2, cart2);
  console.log("Purchase successful:", receipt2);
} catch (error) {
  console.error("Checkout failed:", error.message);
}

// Final stock report
console.log("\n=== Remaining Stock ===");
console.log("- Biscuits:", biscuits.quantity);
console.log("- Cheese:", cheese.quantity);
console.log("- Scratch Cards:", scratchCard.quantity);

// Customer balances
console.log("\n=== Final Balances ===");
console.log("- Ahmed balance:", customer1.balance);
console.log("- Youssab balance:", customer2.balance);