// I need to be able to add money to a bank account. +
// I need to be able to withdraw money from a bank account. +
// I need to be able to get the current balance. +
// I need to throw an error if there isn't enough funds. + 
// I need to be able to transfer money to another account.


// I need to be able to "note" the mensual interest ceiling - if the interest rate is 0.01 (1%), and I have $1000 in my account, the interest noted should be $10. +
// Additionally, there should be a maximium of $50,000 in interested calculated. Which means if I have $52,000 in my account, I should still note that the mensual interest is still 1% of $50,000. +

// I should be able to acccess a list of my favorite accounts, add an account to said list, and remove an account from the list.

class BankAccount {
  private balance : number
  private name: string
  private favoriteAccounts: BankAccount[] = []
  private id: number 

  constructor(balance: number, name: string, id: number) {
    this.balance = balance
    this.name = name
    this.id = id
}

  addFunds(deposit: number) {
   const newBalance = this.balance += deposit
   this.balance = newBalance
   console.log(`${this.name}: You deposited: $${deposit}. Your new balance is: ${newBalance}`)
  }

  withdrawFunds(withdrawal: number) {
    if (withdrawal > this.balance) {
      console.log(`${this.name} has insufficient funds.`);
    } else {
      const newBalance = this.balance -= withdrawal;
      this.balance = newBalance;
      console.log(`You withdrew $${withdrawal} from your account - ${this.name}. Your new balance is: $${this.balance}`);
    }
  }
  
  checkBalance() {
    console.log(`The balance of your account - ${this.name} is: $${this.balance}`)
  }

  // For actual use, when you use return statement in a function, you must add the type to the function to declare what the expected type of return is - versus when we just use console.log().

  // getBalance(): number {
  //   return this.balance
  // }
  
transferMoney(amount: number, account: BankAccount) {
  if (amount > this.balance) {
    console.log('This account has insufficient funds!')
  } else {
    account.addFunds(amount)
    console.log(`${amount} was deposited to your bank account - ${account}`)
  }
}

  checkIRR() {
    // The Interest Rate a Customer recieves is 1%, and should cap out at $50,000.
    const ROI: number = (this.balance * (0.01 * 10)) / 10

    if (ROI >= 50000) {
      console.log(`You've capped out your interest rate return at $50,000.`)
    } else {
      console.log(`Your current IRR is: $${ROI}.`)
    }
  }

  addAccountToFavorites(account: BankAccount): void {
    this.favoriteAccounts.push(account)
  }

  getFavoriteAccounts(): BankAccount[] {
    return this.favoriteAccounts
  }

  removeAccountById(id: number): void {
    const acctToRemove = this.favoriteAccounts.findIndex((account: BankAccount) => account.id === id)
    
    if (acctToRemove === -1) {
      throw new Error('Account not found in favorites!')
    }
    this.favoriteAccounts.splice(acctToRemove, 1)
  }

}

const account1 = new BankAccount(40000, 'AJs Super Awesome Account', 1)
const account2 = new BankAccount(10000000, 'Savings Account', 2)
account1.addAccountToFavorites(account2)
account1.addAccountToFavorites(account1)
console.log(account1.getFavoriteAccounts)
console.log(account1.getFavoriteAccounts().length)
console.log(account1.getFavoriteAccounts()[0].checkBalance())
account1.removeAccountById(2)
console.log(account1.getFavoriteAccounts().length)
console.log(account1)