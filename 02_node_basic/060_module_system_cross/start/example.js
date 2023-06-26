// const { plus, minus } = require('./calc.cjs');
import { plus, minus } from './calc.cjs';
const result = plus(1, 2);
const result2 = minus(1, 2);
console.log(result);
console.log(result2);
console.log(globalThis);
console.log(globalThis === global);