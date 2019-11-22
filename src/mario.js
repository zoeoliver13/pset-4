const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 24;
let rows = Number(readlineSync.question("\nHeight: "));
output="";

while( Number.isNaN(rows)|| !Number.isInteger(rows) ||MIN > rows||rows > MAX){
  rows = Number(readlineSync.question("Height: "));
}
for(let i = 1; i <= rows+1; i++){
  for(let x = 0; x <= i-1; x++){
    output+=(" ");
  }for(let x = 0; x <= i+1; x++){
    output+=("#");
    console.log(output);
  }
}
