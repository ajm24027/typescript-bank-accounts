// I need to be able to add money to a bank account. +
// I need to be able to withdraw money from a bank account. +
// I need to be able to get the current balance. +
// I need to throw an error if there isn't enough funds. + 
// I need to be able to transfer money to another account.
// I need to be able to "note" the mensual interest ceiling - if the interest rate is 0.01 (1%), and I have $1000 in my account, the interest noted should be $10. +
// Additionally, there should be a maximium of $50,000 in interested calculated. Which means if I have $52,000 in my account, I should still note that the mensual interest is still 1% of $50,000. +
// I should be able to acccess a list of my favorite accounts, add an account to said list, and remove an account from the list.
var BankAccount = /** @class */ (function () {
    function BankAccount(balance, name) {
        if (balance === void 0) { balance = 0; }
        this.balance = balance;
        this.name = name;
    }
    BankAccount.prototype.addFunds = function (deposit) {
        var newBalance = this.balance + deposit;
        this.balance = newBalance;
        console.log("".concat(this.name, ": You deposited: ").concat(deposit, ". Your new balance is: ").concat(newBalance));
    };
    BankAccount.prototype.withdrawFunds = function (withdrawal) {
        if (withdrawal > this.balance) {
            console.log("".concat(this.name, " has insufficient funds."));
        }
        else {
            var newBalance = this.balance - withdrawal;
            this.balance = newBalance;
            console.log("You withdrew $".concat(withdrawal, " from your account - ").concat(this.name, ". Your new balance is: ").concat(this.balance));
        }
    };
    BankAccount.prototype.checkBalance = function () {
        console.log("The balance of your account - ".concat(this.name, " is: ").concat(this.balance));
    };
    BankAccount.prototype.checkIRR = function () {
        // The Interest Rate a Customer recieves is 1%, and should cap out at $50,000.
        var ROI = (this.balance * (0.01 * 10)) / 10;
        if (ROI >= 50000) {
            console.log("You've capped out your interest rate return at $50,000.");
        }
        else {
            console.log("Your current IRR is: ".concat(ROI, "."));
        }
    };
    return BankAccount;
}());
var latestAccount = new BankAccount(0, "AJ's First Bank Account");
console.log("Your new account - \"".concat(latestAccount.name, "\" - has been created!"));
latestAccount.addFunds(100);
latestAccount.checkBalance();
latestAccount.withdrawFunds(50);
latestAccount.checkIRR();
latestAccount.checkBalance();
