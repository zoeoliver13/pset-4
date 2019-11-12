const readlineSync = require("readline-sync");
const lowerBound = Number(readlineSync.question("Lower Bound: "));
const upperBound = Number(readlineSync.question("Upper Bound: "));

if(Number.isNaN(lowerBound))||(Number.isNaN(upperBound)){
   console.log("Invalid.");
}else if(lowerBound < Number.MIN_SAFE_INTEGER || upperBound < Number.MIN_SAFE_INTEGER && lowerBound > Number.MAX_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER) {
     console.log("\nInvalid.");
}
