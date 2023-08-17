# typescript-bank-accounts

### Description

A node based Typescript project using OOP to manipulate various resources of bank accounts created in the doc.

#### The Class

The class is created and given two variables and a constructor that takes those specified variables as agruments:

```typescript
class BankAccount {
  private balance : number
  private name: string

  constructor(balance: number, name: string) {
    this.balance = balance
    this.name = name
}
...
}
```

#### "I need to be able to add money to a bank account."

A variable is declared to hold the new balance (that is the current balance with the deposit amount added). Afterwhich the balance of the account is updated to = the newBalance. Finally a console.log gives feedback describing what account and how much is in the account now:

```typescript
  addFunds(deposit: number) {
   const newBalance = this.balance += deposit
   this.balance = newBalance
   console.log(`${this.name}: You deposited: $${deposit}. Your new balance is: ${newBalance}`)
  }
```

#### "I need to be able to withdraw money from a bank account."

A conditional is used to check whether or not the withdrawal is more than the current balance. If it is, not updates occur to the balance, and a console.log advises the user that there isn't enough money for the withdrawal.

If there is enough money, math similar to before occurs. newBalance variable is created >> this.balance is updated to match the newBalance >> console log tells user what's up.

```typescript
 withdrawFunds(withdrawal: number) {
    if (withdrawal > this.balance) {
      console.log(`${this.name} has insufficient funds.`);
    } else {
      const newBalance = this.balance -= withdrawal;
      this.balance = newBalance;
      console.log(`You withdrew $${withdrawal} from your account - ${this.name}. Your new balance is: $${this.balance}`);
    }
  }
```

#### "I need to be able to get the current balance."

Simple getter function that uses console.log to tell the user how much money is in the account.

```typescript
checkBalance() {
    console.log(`The balance of your account - ${this.name} is: $${this.balance}`)
  }
```

#### "I need to be able to "note" the mensual interest ceiling and if the projected interest accurual is over $50,000, tell the user the gains are capped."

Another conditional. Was looking online and saw that float #'s can be unreliable. So I create a variable ROI, and do the math of getting as close to a whole percentage as possible, and then divide the accrual sum by 10 to account for the maths from before.

If the ROI is greater than $50,000, the user is told their accrual sum is capped. Else, they're told what their current accrual sum is.

```typescript
  checkIRR() {
    // The Interest Rate a Customer recieves is 1%, and should cap out at $50,000.
    const ROI: number = (this.balance * (0.01 * 10)) / 10

    if (ROI >= 50000) {
      console.log(`You've capped out your interest rate return at $50,000.`)
    } else {
      console.log(`Your current IRR is: $${ROI}.`)
    }
  }
```
