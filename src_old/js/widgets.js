console.log('widgets');

import Counter from './counter.js';

const counter1 = new Counter({ value: 10, selector: '.counter-1' });
const counter2 = new Counter({ value: 1, selector: '.counter-2' });
const counter3 = new Counter({ value: 25, selector: '.counter-3' });

console.log(counter1);
console.log(counter2);
console.log(counter3);

// setInterval(() => {
//   counter1.increment(10);
// }, 1000);
