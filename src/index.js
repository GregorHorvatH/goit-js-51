console.log('module 04.2');

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 2);

// ===== callback =====
// function fn1() {
//   console.log('hello');
// }

// function fn2() {
//   console.log('world');
// }

// function sayHello(callback1, callback2) {
//   callback1();
//   callback2();
// }

// sayHello(fn1, fn2);
// // sayHello(fn1, fn1);
// sayHello(fn1, () => console.log('Bobby'));

// ===== unique items =====
// const numbers = [1, 3, 2, 1, 4, 2, 2, 1, 3, 5];

// function getUniqueItems1(arr) {
//   const res = [];

//   arr.forEach((item) => {
//     if (!res.includes(item)) {
//       res.push(item);
//     }
//   });

//   return res;
// }

// function getUniqueItems2(arr) {
//   const res = [];

//   arr.forEach((item, idx) => {
//     if (arr.indexOf(item) === idx) {
//       res.push(item);
//     }
//   });

//   return res;

//   // return arr.filter((item, idx) => arr.indexOf(item) === idx);
// }

// const getUniqueItems3 = (arr) => Array.from(new Set(arr));

// console.log(getUniqueItems1(numbers));
// console.log(getUniqueItems2(numbers));
// console.log(getUniqueItems3(numbers));

// ====== reduce - sum ======
// const numbers = [3, 1, 2, 5, 4]; // 15

// // let acc = 0;

// // for (const item of numbers) {
// //   acc += item;
// // }

// // console.log(acc);

// const sum = numbers.reduce((acc, item) => (acc += item), 0);

// console.log(sum);

// ====== reduce - min, max ======
// const numbers = [3, 1, 2, 5, 4]; // 15

// let acc = numbers[0];

// for (const item of numbers) {
//   if (item < acc) {
//     acc = item;
//   }
// }

// console.log(acc);

// const min = numbers.reduce((acc, item) => (item < acc ? item : acc));
// const max = numbers.reduce((acc, item) => (item > acc ? item : acc));

// console.log(min);
// console.log(max);

// ========================================
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     return {
//       // ...car,
//       model: car.model,
//       oldPrice: car.price,
//       newPrice: car.price - car.price * discount,
//     };
//   });

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, carType) =>
//   cars.filter(({ type }) => type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// Example 6 - Метод find
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.price - b.price);

// console.table(sortByAscendingAmount(cars));

// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// ========= sort ========
// const numbers = [3, 1, 2, 5, 10, 4]; // 15

// numbers.sort((a, b) => {
//   if (a < b) return -1765; <0
//   if (a > b) return 198;  >0

//   return 0;
// });

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === 'desc'
//       ? b.model.localeCompare(a.model)
//       : a.model.localeCompare(b.model)
//   );

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// ====== every =====
// const numbers = [2, 4, 6, 8, 10]; // 15
// console.log(numbers.every((item) => item % 2 === 0));

// ====== some =====
// const numbers = [1, 3, 5, 6, 7, 9]; // 15
// console.log(numbers.some((item) => item % 2 === 0));
