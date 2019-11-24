const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer;
let factors = "";
let secondFactor=0;
let done;
console.log();
while(integer <= MIN || integer >= MAX||Number.isNaN(integer) || !Number.isInteger(integer)){
  integer = Number(readlineSync.question("Positive integer: "));
}

let i = integer;
let thingy;
for (i; i >= Math.sqrt(integer); i--) {
    if (integer % i == 0) {
        thingy =  integer / i;
        if (i == thingy) {
            factors +=  ", " + thingy;
        } else if (i == integer) {
            factors += thingy + ", " + i ;
        }else {
            factors +=  ", " + thingy + ", " + i ;
        }
     }
  }
factors += "."
console.log("\n"+factors+"\n");
