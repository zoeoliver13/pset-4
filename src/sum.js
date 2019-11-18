const readlineSync = require("readline-sync");
const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;
let lowerBound = Number(readlineSync.question("\nLower Bound: "));
let upperBound = Number(readlineSync.question("Upper Bound: "));
let sum = 0;

while(Number.isNaN(lowerBound)|| Number.isNaN(upperBound)|| !Number.isInteger(lowerBound)|| !Number.isInteger(upperBound) || !Number.MIN_SAFE_INTEGER>lowerBound||lowerBound>Number.MAX_SAFE_INTEGER|| Number.MIN_SAFE_INTEGER > upperBound||upperBound > Number.MAX_SAFE_INTEGER || !lowerBound >= upperBound){
    lowerBound = Number(readlineSync.question("Lower bound: "));
    upperBound = Number(readlineSync.question("Upper bound: "));
}

lowerBound = 2*Math.ceil(lowerBound/2);
upperBound = 2*Math.floor(upperBound/2);
sum = (lowerBound + upperBound) * ((upperBound - lowerBound) / 2 + 1) / 2
sum = sum.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 2});

console.log("\n" + sum + ".");
