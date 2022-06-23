console.log('module 03.2');

// ---- question ----
// const obj = {
//   name: 'Bobby',
//   age: 25,
//   car: {
//     model: 'Tavria',
//     color: 'green',
//   },
// };

// const objCopy = {
//   ...obj,
//   car: {
//     ...obj.car,
//   },
// };

// objCopy.car.color = 'red';

// console.log('car color:', obj.car);

// ==== class & constructor ====
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 20);

// console.log(bobby);
// console.log(peter);

// ==== question ====
// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const { title: firstTitle, coverImage: firstCover } = firstBook;

// console.log('----- Book 1 -----');
// console.log(firstTitle);
// console.log(firstCover);

// const secondBook = {
//   title: 'Сон смешного человека',
// };

// const { title: secondTitle, coverImage: secondCover = 'dhsdfgsdgs' } =
//   secondBook;

// console.log('----- Book 2 -----');
// console.log(secondTitle);
// console.log(secondCover);

// ------ example ------
// function foo({ userName } = {}) {
//   console.log(userName);
// }

// foo();

// ----- destructure obj -----
// function foo({ a, ...rest }) {
//   console.log(rest);
// }

// foo({ a: 1, b: 2, c: 3 });

// ================================
// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

// ================================
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ================================
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// ================================
// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// companyName и stock и выводила репорт о количестве товаров на складе любой компании.

// Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;

//   for (const value of Object.values(stock)) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default" если в partialContact нет такого свойства.

// Решение
// function createContact({ list = 'default', ...partialContact }) {
//   return {
//     list,
//     id: new Date(),
//     createdAt: Date.now(),
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ================================
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект
// со свойством fullName, вместо firstName и lastName.

// Решение
// function transformId({ firstName, lastName, ...user }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...user,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// ====== location ======
// const location = '';
// console.log(location);

// ====== CART =====
// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     // increaseQuantity
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('finded this product: ', productName);
//         console.log(i);
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;

//         // remove
//         if (item.quantity === 0) {
//           this.remove(productName);
//         }

//         return;
//       }
//     }
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'kiwi', price: 150 });
// console.table(cart.getItems());

// cart.increaseQuantity('mango');
// console.table(cart.getItems());

// cart.decreaseQuantity('mango');
// cart.decreaseQuantity('mango');
// cart.decreaseQuantity('mango');

// // if ('mango.quantity === 0') {
// //   cart.remove('mango');
// // }

// console.table(cart.getItems());

// ====== array of objects ======
// function transformId(users) {
//   const newUsers = [];

//   for (const user of users) {
//     const { firstName, lastName, ...rest } = user;

//     newUsers.push({
//       createadAt: Date.now(),
//       fullName: `${firstName} ${lastName}`,
//       ...rest,
//     });
//   }

//   return newUsers;
// }

// console.table(
//   transformId([
//     {
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     },
//     {
//       id: 2,
//       firstName: 'Adrian',
//       lastName: 'Cross',
//       email: 'a.cross@hotmail.com',
//       friendCount: 20,
//     },
//   ])
// );
