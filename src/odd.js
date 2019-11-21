const readlineSync = require("readline-sync");
const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = Number(readlineSync.question("\nPositive integer: "));
let number;
let sum = 0;
while(positiveInteger <= MIN || positiveInteger >= MAX||Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger )){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}
while(positiveInteger>0){
  number = positiveInteger%10;
   if(number % 2 !=0){
     sum += number;
   }
   positiveInteger -=number;
   positiveInteger = positiveInteger/10;
   }
console.log("\n"+sum+".\n");
