// const a = 10;
// console.log('index a:', a);

// // Просимо клієнта підтвердити бронювання готелю
// // і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const userName = prompt("What is your name?");
// console.log(`Hello`, userName); // string
// console.log(`Hello`, Number(userName)); // number

// const x = 15;
// console.log(x % 8);

// const y = 27;
// console.log('парне число:', y % 2 === 0); // парне число
// console.log('не парне число', y % 2 !== 0); // не парне число

// let i = 1;
// console.log(i);

// // i = i + 1;
// // console.log(i);
// console.log(i = i + 1);

// // i += 1;
// // console.log(i);
// console.log(i += 1);

// // i++;
// // console.log(i);
// console.log(i++); // post-increment
// console.log(i); // 4

// // ++i;
// // console.log(i);
// console.log(++i); // pre-increment

// ==================
// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;

// console.log(total);

// const diff = grapes - apples;

// console.log(diff);

// ==================
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// ==================
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ==================
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;

// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(27.4)); // 27
// console.log(Math.round(27.5)); // 28

// const x = 3.1415
// console.log(x.toFixed(3));

// ==================
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;

// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ==================
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);

// console.log(bmi); // 28.8

// const weight = Number.parseFloat('88,3'.replace(',', '.'));
// const height = Number.parseFloat('1.75'.replace(',', '.'));
// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));

// console.log(bmi); // 28.8
