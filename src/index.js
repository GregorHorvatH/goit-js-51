console.log('module 05.2');

// class Human {
//   #age = 0;

//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//   }

//   get age() {
//     return this.#age;
//   }

//   set age(newAge) {
//     this.#age = newAge;
//   }
// }

// const bobby = new Human('Bobby', 15);
// bobby.age = 16;

// console.log(bobby.#age);

// ----- account ------
// class Account {
//   #balance = 0;

//   constructor(balance) {
//     this.#balance = balance;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(newBalance) {
//     if (newBalance < 0) return;

//     this.#balance = newBalance;
//   }
// }

// const deposit = new Account(1000);
// console.log(deposit.balance);

// deposit.balance = 500;
// console.log(deposit.balance);

// deposit.balance = -100;
// console.log(deposit.balance);

// ------ private old -------
// class Account {
//   constructor(balance) {
//     this._balance = balance;
//   }

//   get balance() {
//     return this._balance;
//   }

//   set balance(newBalance) {
//     if (newBalance < 0) return;

//     this._balance = newBalance;
//   }
// }

// const deposit = new Account(1000);
// console.log(deposit._balance); // this.balance
// console.log(deposit.balance); // getter

// ---- prototype ----
// class Human {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   constructor(name, age, x) {
//     super(name, age);

//     this.x = x;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}, I can heal`);
//   }
//   heal() {
//     console.log('I can heal');
//   }
// }

// const bobby = new Human('Bobby', 15);
// const house = new Doctor('dr.House', 50);

// console.log(house);
// house.sayHello(); // Doctor
// house.__proto__.__proto__.sayHello();

// --- closure ---
// function Counter(x) {
//   return function () {
//     console.log(x++);
//   };
// }

// const counter1 = new Counter(10);

// counter1();
// counter1();
// counter1();
// counter1();

// counter1.x = 50;
// counter1();

// console.log(counter1.x);
// counter1();

// ---- currying ----
// sum(1); // 1
// sum(1)(2); // 3
// sum(1)(2)(1)(1)(1); // 6

// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.
// Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.
// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(name) {
//     this.items = this.items.filter((item) => item !== name);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango -> getter
// mango.login = 'Mangodoge'; // -> setter
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   }

//   updateNote(text, priority) {
//     this.items = this.items.map((item) =>
//       item.text === text
//         ? {
//             ...item,
//             priority,
//           }
//         : item
//     );
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). По умолчанию значение свойства on должно быть false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
