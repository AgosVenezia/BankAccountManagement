class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      }
  
      this.balance -= amount;
    }
  
    checkBalance() {
      return this.balance;
    }
  }
  
  const account = new BankAccount("1234567890", "John Doe", 1000);
  
  const switcher = document.querySelector("select");
  const amountInput = document.querySelector("input[name='amount']");
  const balanceOutput = document.querySelector("span[id='balance']");
  
  const depositButton = document.querySelector("#depositButton");
  depositButton.style.display = "inline";
  depositButton.addEventListener("click", () => {
    try {
      account.deposit(Number(amountInput.value));
      balanceOutput.textContent = account.checkBalance();
    } catch (error) {
      alert(error.message);
    }
  });
  
  const withdrawButton = document.querySelector("#withdrawButton");
  withdrawButton.addEventListener("click", () => {
    try {
      account.withdraw(Number(amountInput.value));
      balanceOutput.textContent = account.checkBalance();
    } catch (error) {
      alert(error.message);
    }
  });
  
  const checkBalanceButton = document.querySelector("#checkBalanceButton");
  checkBalanceButton.addEventListener("click", () => {
    balanceOutput.textContent = account.checkBalance();
  });
  
  switcher.addEventListener("change", () => {
    const option = switcher.options[switcher.selectedIndex];
    const action = option.value;
  
    if (action === "deposit") {
      depositButton.style.display = "inline";
      withdrawButton.style.display = "none";
      checkBalanceButton.style.display = "none";
    } else if (action === "withdraw") {
      depositButton.style.display = "none";
      withdrawButton.style.display = "inline";
      checkBalanceButton.style.display = "none";
    } else if (action === "checkBalance") {
      depositButton.style.display = "none";
      withdrawButton.style.display = "none";
      checkBalanceButton.style.display = "inline";
    }
  });

  //balanceOutput.textContent = "Balance: " + account.checkBalance().toString();