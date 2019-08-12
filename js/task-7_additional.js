"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = {
      type: Transaction.DEPOSIT,
      amount: amount
    };

    this.addTransaction(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостаточно средств на счету");
    } else {
      this.balance -= amount;
      const transaction = {
        type: Transaction.WITHDRAW,
        amount: amount
      };

      this.addTransaction(transaction);
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);

    for (const id in this.transactions) {
      transaction.id = id;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id == transaction.id) return transaction;
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  }
};

account.deposit(200);

account.deposit(15);

account.withdraw(250);

account.withdraw(45);

account.withdraw(35);

console.log(account.getBalance());

console.log(account.transactions);

console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal("deposit"));
