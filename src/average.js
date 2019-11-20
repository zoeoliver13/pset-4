const readlineSync = require("readline-sync");
const min = 0;
const max = Number.MAX_SAFE_INTEGER;
let positiveInteger;
let average = 0;
let amount = 0;
console.log("");
while(Number.isNaN(positiveInteger)|| !Number.isInteger(positiveInteger)|| positiveInteger > min ){
  positiveInteger = Number(readlineSync.question("Non-negative integer: "));
  if(positiveInteger>min && positiveInteger<max){
    average+=positiveInteger;
    amount++;
  }
}
average/=amount;
average = average.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 3})
console.log("\n"+average);
