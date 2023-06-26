// const myModule = require('./sub')
import { helloFromSub } from "./sub.js";
import isOdd from "is-odd";
// myModule.helloFromSub();
helloFromSub();
const oddy = isOdd(3);
console.log(oddy);
