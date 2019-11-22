const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 24;
let output = "";
let rows = Number(readlineSync.question("\nHeight: "));

while( Number.isNaN(rows)|| !Number.isInteger(rows) ||MIN > rows||rows > MAX){
  rows = Number(readlineSync.question("Height: "));
}
console.log();
