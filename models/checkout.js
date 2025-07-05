function checkout(customer, cart) {
  const total = cart.getTotal();
  
  if (!customer.canAfford(total)) {
    throw new Error(`${customer.name} cannot afford this purchase`);
  }

  customer.balance -= total;
  cart.items.forEach(item => {
    item.product.quantity -= item.quantity;
  });

  return {
    success: true,
    customer: customer.name,
    total,
    remainingBalance: customer.balance
  };
}

module.exports = checkout;