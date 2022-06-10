console.log('module 01.2');

const a = 2;
const b = 3;
const c = a + b;

console.log('c:', c);

const totalSalary = 100000000;
console.log('totalSalary:', totalSalary, '$');

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(20, 3)); // 23
console.log(sum(120, 30)); // 150

// ======= scope ======
// global scope
const x = 5;

// scope A
{
  const y = 10;

  console.log('--- Scope A ---');
  console.log('x:', x);
  console.log('y:', y);

  // scope B
  {
    const x = 11;
    const y = 11;

    console.log('--- Scope B ---');
    console.log('x:', x);
    console.log('y:', y);
  }
}

console.log('--- Global Scope ---');
console.log('x:', x);

// ===== example =====
const text = 'kjfhdsfg spam sdgsgiuyiog ariguy';

console.log(text.includes('sale') || text.includes('spam'));

// ===================================================
// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4); // true
// console.log(10 >= '7'); // true
// console.log('2' > '12');
// console.log('2' < '12');

// console.log('4' == 4); // true
// console.log('6' === 6); // false
// console.log('false' === false); // false

// console.log(1 == true);
// console.log(1 === true);

// console.log('0' == false); // true
// console.log('0' === false);

// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');

// console.log(undefined == null);
// console.log(undefined === null);

// ===================================================
// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

// ===================================================
// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value1 = incomingValue || defaultValue; // 10
// const value2 = incomingValue ?? defaultValue; // 0

// console.log(value1);
// console.log(value2);

// ===================================================
// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

// const totalMinutes = 65;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// ===================================================
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const userAnswer = prompt('Яка офіційна назва JavaScript?');

// if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не вірно!');
// }

// console.log(
//   userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()
//     ? 'Вірно!'
//     : 'Не вірно!'
// );

// ===================================================
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// // let timestring;

// // if (minutes > 0) {
// //   timestring = `${hours} ч. ${minutes} мин.`;
// // } else {
// //   timestring = `${hours} ч.`;
// // }

// // console.log(timestring);
// console.log(minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`);

// ===================================================
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку
// "Это положительное число", если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt("Введите число");
// const number = Number(userInput) || 0;
// let answer;

// if (number > 0) {
//   answer = "Это положительное число";
// } else if (number < 0) {
//   answer = "Это отрицательное число";
// } else {
//   answer = "Это ноль";
// }

// console.log(answer);

// ===================================================
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   // const res = Math.max(a, b);
//   const res = a > b ? a : b;

//   // if (a > b) {
//   //   res = a;
//   // } else {
//   //   res = b;
//   // }

//   console.log(res);
// } else {
//   console.log(b + 512);
// }

// ===================================================
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки

// if (!link.endsWith("/")) link += "/";

// // link += !link.endsWith("/") ? "/" : "";

// // Пиши код выше этой строки
// console.log(link);

// ===================================================
// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = "https://somesite.com/about";
// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки

// if (!link.endsWith("/") && link.includes("my-site")) link += "/";

// // Пиши код выше этой строки
// console.log(link);

// ===================================================
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = "https://somesite.com/about";

// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }

// link += link.includes("my-site") && !link.endsWith("/") ? "/" : "";

// console.log(link);

// ===================================================
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 29;
// let text;

// if (hours < 17) {
//   text = "Pending";
// } else if (hours >= 17 && hours <= 24) {
//   text = "Expires";
// } else {
//   text = "Overdue";
// }

// console.log(text);

// ===================================================
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 2;
// // Пиши код ниже этой строки
// let text;

// switch (daysUntilDeadline) {
//   case 0:
//     text = "Сегодня";
//     break;
//   case 1:
//     text = "Завтра";
//     break;
//   case 2:
//     text = "Послезавтра";
//     break;
//   default:
//     text = "Дата в будущем";
//     break;
// }

// console.log(text);

// ===================================================
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

// ===================================================
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('Login');

// if (login) {
//   if (login === 'Админ') {
//     const password = prompt('password');

//     if (password === 'Я админ') {
//       console.log('Здравствуйте!');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Я вас не знаю');
//   }
// } else {
//   console.log('Отменено');
// }

// ====== import/export =====
// import { sum } from './utils.js';

// console.log(sum(1, 1));
// console.log(sum(10, 1));
// console.log(sum(13, 1));
// console.log(sum(16, 1));
