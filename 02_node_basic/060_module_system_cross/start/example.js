// const { plus, minus } = require('./calc.cjs');
import { plus, minus } from './calc.cjs';
const wa = plus(1, 2);
const sa = minus(1, 2);
console.log(wa);
console.log(sa);
// console.log(globalThis)
console.log(globalThis === global);