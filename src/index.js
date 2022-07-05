'use strict';

console.log('module 05.1');

// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(this);
//   },
// };
// // const sayHelloCopy = obj.sayHello;

// // obj.sayHello();

// function fn(callback) {
// callback();
// }

// fn(obj.sayHello);

// ----- window / undefined -----
// function fn() {
//   console.log(this);
// }

// fn();

// ----- example ------
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     // this.color = color;
//   };

//   // changeColor(); // Какой this ???

//   const sweater = {
//     color: 'teal',
//     updateColor: changeColor,
//   };

//   // sweater.updateColor(); //

//   // sweater.updateColor('red'); // Какой this ???

//   return sweater.updateColor;
// };

// const changeColor = makeChangeColor();
// // changeColor();

// ----- this -----
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(this);
//   },
// };

// const peter = { name: 'Peter', age: 20 };
// const chris = { name: 'Chris', age: 30 };

// // obj.sayHello();

// const copy = obj.sayHello;

// copy.call(obj);
// copy.apply(peter);

// const bindedFn = copy.bind(chris); // new function with binded context

// bindedFn();

// ----- arrow functions & this ------
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     // console.log(this);

//     const arrowFn = () => console.log(this);

//     return arrowFn;
//   },

//   // sayBye: () => {
//   //   console.log(this);
//   // },
// };

// const fn = obj.sayHello();

// fn();

// ===== again :) =====
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   fnClassic() {
//     // console.log(this); // {name: 'Bobby', age: 15 }

//     function fn2Classic() {
//       console.log(this); // ? undefined || window
//     }

//     return fn2Classic;
//   },

//   fnArrow() {
//     // console.log(this); // {name: 'Bobby', age: 15 }

//     const fn2Arrow = () => {
//       console.log(this); // {name: 'Bobby', age: 15 }
//     };

//     return fn2Arrow;
//   },
// };

// const fn2ClassicCopy = obj.fnClassic();
// fn2ClassicCopy();

// const fn2ArrowCopy = obj.fnArrow();
// fn2ArrowCopy();

// ----- bind ------
// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// function sayHello() {
//   console.log(this);
// }

// function myBind(callback, context) {
//   return function () {
//     callback.call(context);
//   };
// }

// const sayHelloCopy = sayHello.bind(obj);
// sayHelloCopy();

// const sayHelloCopy2 = myBind(sayHello, obj);
// // sayHelloCopy2();

// setTimeout(sayHelloCopy2, 2000);

// ---- arrow fn -----
// const fn = () => console.log(this);

// fn();

// ------ copy fn to obj -----
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(this);
//   },
// };

// const peter = {
//   name: 'Peter',
//   age: 20,

//   fn: obj.sayHello,
// };

// obj.sayHello();
// peter.fn();

// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(phonebook.contacts);

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });
// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.contacts);

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     const { a = 0, b = 0 } = this;

//     return a + b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);

// calculator.read(10, 2);
// console.log(calculator);

// console.log(calculator.add());
// console.log(calculator.mult());

// ----- constructor ------
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 20);
// const chris = new Human('Chris', 25);

// console.log(bobby);
// console.log(peter);
// console.log(chris);

// ----- prototype ------
// class Human {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Doctor extends Human {
//   constructor({ profession, ...rest }) {
//     super(rest);

//     this.profession = profession;
//   }
// }

// // const bobby = new Human('Bobby', 15);
// // const peter = new Human('Peter', 20);
// // const chris = new Human('Chris', 25);

// const house = new Doctor({
//   name: 'dr.House',
//   age: 50,
//   profession: 'therapist',
// });

// // console.log(bobby);
// // console.log(peter);
// // console.log(chris);

// console.log(house);
