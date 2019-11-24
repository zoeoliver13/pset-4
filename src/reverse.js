const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer;
let reverse = 0;
let number = "";
console.log();
while(Number.isNaN(integer)|| !Number.isInteger(integer)|| MIN>integer|| integer>MAX){
     integer = Number(readlineSync.question("Positive integer: "));
}
for (integer; integer > 10;) {
      reverse = integer % 10;
      number = number + reverse + ", ";
      integer = (integer-integer % 10)/10;
  }
  number += integer + ".";
  console.log("\n"+number+"\n");
