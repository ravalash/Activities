function MiniBank(balance) {
  this.statement=[balance];
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  },
  this.setBalance = function(value) {
    this.balance += value;
  },
  this.updateStatement = function(value) {
    this.statement.push(value);
  },
  this.getStatement = function() {
    return this.statement;
  },
  this.printStatement = function() {
    console.log("Statement:")
    for (i=0;i<this.statement.length;i++){
      console.log(`${this.statement[i]}`);  
    }
  },
  this.deposit = function(value) {
    if (value <0){
      console.log("Only positive values may be used");
      return;
    }
    this.updateStatement(value);
    this.setBalance(value);
  },
  this.withdraw = function(value) {
    if (value>this.balance) {
      console.log ("You don't have enough money!");
      return;
    }
    else if(value<0){
      console.log("Only positive values may be used");
      return;
    }
    this.updateStatement(-1*value);
    this.setBalance(-1*value);
  };
}

const bank = new MiniBank(20);
bank.printBalance();
bank.deposit(20);
bank.printBalance();
bank.withdraw(10);
bank.printBalance();
bank.printStatement();