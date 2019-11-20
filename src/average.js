const readlineSync = require("readline-sync");
const min = 0;
const max = Number.MAX_SAFE_INTEGER;
let positiveInteger = Number(readlineSync.question("\nNon-negative integer: "));

while(Number.isNaN(positiveInteger)|| !Number.isInteger(positiveInteger)|| !min>positiveInteger|| !positiveInteger>max){
  positiveInteger = Number(readlineSync.question("Non-negative integer: "));
}
while (positiveInteger !>=0) {
  let average;
  average = positiveInteger++
  average/positiveInteger
}
