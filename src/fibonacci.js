const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 78;
let number = Number(readlineSync.question("\nPositive integer: "));
while(number < MIN || positiveInteger > MAX||Number.isNaN(number) || !Number.isInteger(number)){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let number = 2; number <= 10; number++) {
    fibonacci[number] = fibonacci[number - 2] + fibonacci[number - 1];
  }
  console.log(fibonacci[number]);
