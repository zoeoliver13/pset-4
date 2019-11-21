const readlineSync = require("readline-sync");
const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = Number(readlineSync.question("\nNon-negative integer: "));
let number;

while(positiveInteger <= MIN || positiveInteger >= MAX||Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger )){
  positiveInteger = Number(readlineSync.question("Non-negative integer: "));
}

for(let i = 2; i < positiveInteger; i++){
  positiveInteger % i == 0
  number = "Not Prime.";
}
for(let i = 2; i < positiveInteger; i++){
  positiveInteger == 1 || positiveInteger ==2
  number = "Prime."
      }
console.log("\n"+number+"\n");
