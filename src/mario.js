const readlineSync = require("readline-sync");
const min = 1;
const max = 24;
let length = Number(readlineSync.question("Height: "));
let height = Number(readlineSync.question("Height: "));

while(Number.isNaN(length)|| Number.isNaN(height)|| !Number.isInteger(length)|| !Number.isInteger(height) || !Number.MIN_SAFE_INTEGER>length||length>Number.MAX_SAFE_INTEGER|| Number.MIN_SAFE_INTEGER > height||height > Number.MAX_SAFE_INTEGER){
  length = Number(readlineSync.question("Height: "));
  height = Number(readlineSync.question("Height: "));
}
for (i = 0; i < 5; i++) {
  console.log("*");
}
  for (j = 1; j <= i; j++) {
    console.log('*');
  }
