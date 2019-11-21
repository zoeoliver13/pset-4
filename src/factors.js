const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = Number(readlineSync.question("\nPositive integer: "));
while(positiveInteger <= MIN || positiveInteger >= MAX||Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger )){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}
let first = [];
let second = 0
  for(let i = 1; i < positiveInteger/2; i++){
    if(positiveInteger % i == 0){
      second = positiveInteger/i;
      first.push(i);
      first.push(second);
    }
  }
first = [...new Set(first)];
console.log("\n"+ first.join(", ")+".\n");
