class BankAccount {
    constructor(accountHolderName, balance, acctNum){
      this.ownerName = accountHolderName
      this.balance = balance
      this.acctNum = acctNum
    }
  
    deposit(depositAmount){
      // logic for updating bank balace
      console.log('Bank Account Deposit')
    }
  
    withdraw(withdrawalAmount){
      console.log('Bank Account Withdraw')
    }
  
    getOwnerName() {
      return this.ownerName
    }
  }
  
  class RegisteredBankAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, limit){
      super(ownerName, balance, acctNum)
      this.limit = limit
    }
  
    // adding a function with the same name as a function in the parent overrides the parent's function
    deposit(depositAmount) {
      // This allows the deposit function from the parent to run
      // super.deposit()
      console.log('Registered')
  
      super.deposit(depositAmount)
      this.limit = this.limit - depositAmount
      console.log(this.ownerName)
    }
  
    withdraw(withdrawAmount) {
      console.log('Withdraw from registered account')
      let amountToWithdraw = withdrawAmount
      if (amountToWithdraw > this.limit)
        amountToWithdraw = this.limit
  
      super.withdraw(amountToWithdraw)
    }
  
    setLimit(newLimit) {
      if (newLimit > governmentMaxLimit) {
        this.limit = governmentMaxLimit
      } else {
        this.limit = newLimit
      }
    }
  
    // You can have new functions in the child class that didn't exist in the parent class
    getRegisteredAccountLimit() {
      return this.limit
    }
  }
  
  // Another way of defining methods/functions within a class
  RegisteredBankAccount.prototype.getLimit = function() {
    return this.limit
  }
  
  let rsvBankAccount = new RegisteredBankAccount('Valerie', '12345', '$100.00',125)
  
  rsvBankAccount.withdraw(150)
  console.log(rsvBankAccount.getOwnerName())
  console.log(rsvBankAccount.getLimit())
  
  // You have access to the properties though the class instances but you should only be accessing or setting them through methods/function
  console.log(rsvBankAccount.limit)
  
  
  