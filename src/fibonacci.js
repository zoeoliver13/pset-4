const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 78;
let number=0;
let previousnum=0;
let fibonacci;
let int = 1;
console.log("");
while(number < MIN || number > MAX||Number.isNaN(number) || !Number.isInteger(number)){
  number = Number(readlineSync.question("Positive integer: "));
}
for(let i = 2; i <= number; i++){
  fibonacci = previousnum + int;
  previousnum = int;
  int = fibonacci;

}
fibonacci = fibonacci.toLocaleString("en");
console.log("\n"+fibonacci+".\n");
