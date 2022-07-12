console.log('Q&A 1');

// class Auto {
//   // #model = '';

//   constructor({ model, price }) {
//     this._model = model;
//     this.price = price;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// const myCar = new Auto({ model: 'SuperCar', price: 100000 });
// // console.log(myCar);

// // myCar.model = 'Audi';
// // console.log(myCar.model);

// // myCar._model = 'KJGKJG';
// // console.log(myCar._model);

// ----- example -----
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];

//   for (const product of products) {
//     if (propName in product) {
//       values.push(product[propName]);
//     }
//   }

//   return values;
// }

// const getAllPropValues = (propName) =>
//   products.reduce(
//     (acc, obj) =>
//       obj.hasOwnProperty(propName) ? [...acc, obj[propName]] : acc,
//     []
//   );

// const getAllPropValues = (propName) => {
//   const result = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }

//   return result;
// };

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// ------------------------------------------------
// const bobby = {
//   name: 'Bobby',
//   age: 15,

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// const peter = {
//   name: 'Peter',
//   age: 20,
// };

// function sayHello() {
//   console.log(`Hello, my name is ${this.name}!`);
// }

// const fnCopy = bobby.sayHello.bind(bobby);

// fnCopy();

// sayHello.call(bobby);
// sayHello.apply(peter);

// setTimeout(sayHello.bind(bobby), 2000);
// setTimeout(sayHello.bind(peter), 4000);

// ------------------------------------------------
// function fn(x) {
//   return function () {
//     console.log(x++);
//   };
// }

// let number = 5;
// const fn1 = fn(number); // fn - 5
// fn1();
// fn1();
// fn1();
// fn1();
// fn1();
// fn1();

// ------------------------------------------------
// const generateValidator = (RegExp) => (value) => RegExp.test(value);

// const nameValidator = generateValidator(
//   /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
// );

// // const regex = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
// // console.log(regex.test('Poly'));

// // const phoneValidator = generateValidator(
// //   /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
// // );

// // const emailValidator = generateValidator(
// //   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
// // );

// console.log(nameValidator('Poly'));
// // console.log(nameValidator('5467'));
// // console.log(phoneValidator('Mango'));
// // console.log(phoneValidator('+380502388238'));
// // console.log(emailValidator('krosh@org.ua'));
// // console.log(emailValidator('aJax'));

// ------------------------------------------------
// const arr = ['Bobby', 'Peter'];
// const items = arr.map((name) => `<a href='/user/${name}'>${name}</a>`);

// console.log(items);
