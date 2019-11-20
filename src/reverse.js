const readlineSync = require("readline-sync");
const min = 1;
const max = Number.MAX_SAFE_INTEGER;
let integer = Number(readlineSync.question("\nPositive integer: "));
let reverse = 0;
while(Number.isNaN(integer)|| !Number.isInteger(integer)|| !min>integer|| !integer>max){
    let integer = Number(readlineSync.question("Positive integer: "));
}
while (integer > 0) {
      reverse *= 10;
      reverse += integer % 10;
      integer -= integer % 10;
      integer /= 10;
  }

console.log("\n"+reverse+"\n");
