class Customer {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  canAfford(amount) {
    return this.balance >= amount;
  }
}

module.exports = Customer;