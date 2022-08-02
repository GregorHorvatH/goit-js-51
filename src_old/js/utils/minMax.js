import sum from './sum.js';

function fn(arr) {
  return Math.min(...arr);
}

export const min = (arr) => fn(arr);

export const max = (arr) => Math.max(...arr);

export const sumNumbers = (a, b) => sum(a, b);
