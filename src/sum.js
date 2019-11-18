const readlineSync = require("readline-sync");
const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;
let lowerBound = Number(readlineSync.question("Lower Bound: "));
let upperBound = Number(readlineSync.question("Upper Bound: "));
let sum = 0;

while(Number.isNaN(lowerBound)|| Number.isNaN(upperBound)|| !Number.isInteger(lowerBound)|| !Number.isInteger(upperBound) || !Number.MIN_SAFE_INTEGER<lowerBound<Number.MAX_SAFE_INTEGER|| !Number.MIN_SAFE_INTEGER<upperBound<Number.MAX_SAFE_INTEGER){
    lowerBound = Number(readlineSync.question("Lower bound: "));
    upperBound = Number(readlineSync.question("Upper bound: "));
}
