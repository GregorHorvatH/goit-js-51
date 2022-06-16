console.log('module 02.2');

// ======== IIFE =========
// (function () {
//   const a = 5;
//   console.log('a:', a);
// })();

// (function () {
//   const a = 15;
//   console.log('a:', a);
// })();

// ======= arguments ========
// function sum() {
//   let res = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     res += arguments[i];
//   }

//   return res;
// }

// function multiple() {
//   let res = 1;

//   for (const number of arguments) {
//     res *= number;
//   }

//   return res;
// }

// function sum2(...props) {
//   let res = 0;

//   for (const number of props) {
//     res += number;
//   }

//   return res;
// }

// console.log('----- sum ------');
// console.log(sum(2)); // 2
// console.log(sum(2, 2, 3, 2, 1)); // 10

// console.log('----- multiple ------');
// console.log(multiple(2, 2)); // 4
// console.log(multiple(2, 2, 10)); // 40

// console.log('----- sum2 ------');
// console.log(sum2(3)); // 3
// console.log(sum2(2, 2, 3, 2, 1, 10)); // 20

// ========= sum ===========
// function sum(a, b) {
//   const c = b + a;

//   return c;
// }

// const text1 = 'Hello';
// const text2 = 'world';
// const result = text1 + ' ' + text2;

// console.log(result);

// function fn() {}

// console.log(fn());

// ======== hoisting =========
// fn();

// function fn() {
//   console.log('hello');
// }

// console.log('a:', a);
// console.log('b:', b);

// var a = 5;
// const b = 10;

// =====================================
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   const weightNum = parseFloat(weight.replace(',', '.'));
//   const heightNum = parseFloat(height.replace(',', '.'));

//   return parseFloat((weightNum / Math.pow(heightNum, 2)).toFixed(1));
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// =====================================
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   return a < b ? a : b;
// }

// function min(...props) {
//   let res = props[0];

//   for (const num of props) {
//     if (num < res) {
//       res = num;
//     }
//   }

//   return res;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(1, 5, -4, 5, 2, 0, 10)); // -4

// =====================================
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const [x, y] = dimensions.split(' ');
//   // const arr = dimensions.split(' ');
//   // const x = arr[0];
//   // const y = arr[1];

//   return parseFloat(x) * parseFloat(y);
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('2 5')); // 10

// =====================================
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   console.log('-------------');
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// =====================================
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// =====================================
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let res = numbers[0];

//   for (const num of numbers) {
//     if (num > res) {
//       res = num;
//     }
//   }

//   return res;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// =====================================
// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;

//   for (const number of arguments) {
//     sum += number;
//   }

//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// =====================================
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// =====================================
// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) return;

//   courses.push(name);
// }

// function removeCourse(name) {
//   const idx = courses.indexOf(name);

//   if (idx != -1) {
//     courses.splice(idx, 1);
//   } else {
//     console.log('Курс с таким имененем не найден');
//   }
// }

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (idx != -1) {
//     courses.splice(idx, 1, newName);
//   } else {
//     console.log('Курс с таким имененем не найден');
//   }
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

// addCourse('CSS'); // 'У вас уже есть такой курс'
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express', 'CSS']

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// ====== question =======
// function findLongestWord(text) {
//   let textArr = text.split(' ');
//   let result = textArr[0];

//   for (const word of textArr) {
//     if (word.length > result.length) {
//       result = word;
//     }

//     // result = word.length > result.length ? word : result;
//   }

//   return result;
// }

// console.log(
//   findLongestWord("I  done it. But I can't understand how it works.")
// );

// ======= excercise ========
// Як знайти два однакових числа в двох різних масивах?

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [34, 54, 1, 456, 3, 675, 234, 87, 6];
// const res = [];

// for (const number of arr1) {
//   if (arr2.includes(number)) {
//     res.push(number);
//   }
// }

// console.log(res);

// ===== excercise ======
// знайти дублікати

const arr1 = [1, 2, 3, 2, 4, 5, 1, 6]; // [1, 2];
