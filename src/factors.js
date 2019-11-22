const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer = 0;
let str = "";
let number = 2;
while(integer <= MIN || integer >= MAX||Number.isNaN(integer) || !Number.isInteger(integer)){
  integer = Number(readlineSync.question("Positive integer: "));
}

while(integer%number==0){
  str = str + number;
  number++
}
console.log(number);
