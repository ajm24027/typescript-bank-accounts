// I need to be able to add money to a bank account. +
// I need to be able to withdraw money from a bank account. +
// I need to be able to get the current balance. +
// I need to throw an error if there isn't enough funds. + 
// I need to be able to transfer money to another account.


// I need to be able to "note" the mensual interest ceiling - if the interest rate is 0.01 (1%), and I have $1000 in my account, the interest noted should be $10. 
// Additionally, there should be a maximium of $50,000 in interested calculated. Which means if I have $52,000 in my account, I should still note that the mensual interest is still 1% of $50,000.

// I should be able to acccess a list of my favorite accounts, add an account to said list, and remove an account from the list.

class BankAccount {
  public balance : number
  public name: string

  constructor(balance: number = 0, name: string) {
    this.balance = balance
    this.name = name
}

  addFunds(deposit: number) {
   const newBalance = this.balance + deposit
   this.balance = newBalance
   console.log(`${this.name}: You deposited: ${deposit}. Your new balance is: ${newBalance}`)
  }

  withdrawFunds(withdrawal: number) {
    if (withdrawal > this.balance) {
      console.log(`${this.name} has insufficient funds.`);
    } else {
      const newBalance = this.balance - withdrawal;
      this.balance = newBalance;
      console.log(`You withdrew $${withdrawal} from your account - ${this.name}. Your new balance is: ${this.balance}`);
    }
  }
  
  checkBalance() {
    console.log(`The balance of your account - ${this.name} is: ${this.balance}`)
  }

  transferFunds(accountName: string, funds: number) {
    
  }
}