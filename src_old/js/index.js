import { min, max, sumNumbers } from './utils/minMax.js';
import data from './utils/data.js';
import isEmail from './utils/isEmail.js';

console.log(min(data));
console.log(max(data));
console.log(sumNumbers(10, 12));

console.log(isEmail('test.user@gmail.com')); // true
console.log(isEmail('test.user_gmail.com')); // false
