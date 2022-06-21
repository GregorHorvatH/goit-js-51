// console.log('module 03.1');

// ==== question ====
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// ==== hasOwnProperty ====
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';
// dog.legs = 5;

// console.log(dog.hasOwnProperty('legs'));

// ==== example ====
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// ==== object =====
// 1. When it is after the = , for example:
// const x = {}; // - literal of the object.

// // 2. When you are passing arguments in the
// function fn(obj) {
//   console.log(obj);
// }

// // 3. Or When you are returning literal in the function:
// const rtf = function () {
//   const x = {};

//   return x;
// };

// -----------------------------------------------------
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// Код

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // добавляет поле mood со значением 'happy'
// user['mod'] = 'happy';

// // заменяет значение hobby на 'skydiving'
// user.hobby = 'skydiving';

// // заменяет значение premium на false
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// for (const item of Object.entries(user)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user);

// ===== for...in =====
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// // all keys
// for (const key in dog) {
//   console.log(key);
// }

// // only own keys
// for (const key of Object.keys(dog)) {
//   console.log(key);
// }

// -----------------------------------------------------
// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
// Код;

// function getSalariesSum(salaries = {}) {
//   let sum = 0;

//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum;
// }

// console.log(
//   getSalariesSum({
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   })
// );

// console.log(getSalariesSum({}));

// console.log(getSalariesSum());

// -----------------------------------------------------
// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
// Код

// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }

//   return 0;
// }

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 }, // 5200
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 }, // 400
// ];

// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'sdgsfg'));

// -----------------------------------------------------
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
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
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount, // amount: amount,
      type, // type: type,
      date: Date.now(),
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    const newTranslation = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTranslation);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('no money :(');
    } else {
      this.balance -= amount;

      const newTranslation = this.createTransaction(
        amount,
        Transaction.WITHDRAW
      );

      this.transactions.push(newTranslation);
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
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;

    for (const item of this.transactions) {
      if (item.type === type) {
        sum += item.amount;
      }
    }

    return sum;
  },
};

console.log(account.balance); // 0

account.deposit(100);
account.deposit(50);
console.log(account.balance); // 100

account.withdraw(140);
account.withdraw(50);
console.log(account.balance); // 10

console.log(account.transactions);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(20));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
