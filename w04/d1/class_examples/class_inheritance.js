class BankAccount {
    constructor(ownerName, balance, acctNum){
      console.log('Valerie')
      this.ownerName = ownerName
      this.balance = balance
      this.acctNum = acctNum
    }
  
    deposit(){
      console.log('Bank Account Deposit')
    }
  
    withdraw(){
  
    }
  }
  
  class RegisteredBankAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, limit){
      super(ownerName, balance, acctNum)
      this.limit = limit
    }
  
    // adding a function with the same name as a function in the parent overrides the parent's function
    deposit() {
      // This allows the deposit function from the parent to run
      super.deposit()
      console.log('Registered')
    }
  
    // You can have new functions in the child class that didn't exist in the parent class
    getRegisteredAccountLimit() {
      return this.limit
    }
  }
  
  let rsvBankAccount = new RegisteredBankAccount('Valerie', '12345', '$100.00')
  
  rsvBankAccount.deposit()
  
  // console.log(rsvBankAccount)