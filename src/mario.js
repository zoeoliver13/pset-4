const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 24;
let length = [];
let height = Number(readlineSync.question("\nHeight: "));

while( Number.isNaN(height)|| !Number.isInteger(height) ||MIN > height||height > MAX){
  height = Number(readlineSync.question("Height: "));
}
console.log();
for(let x = 1; x < height+1; x++){
  for(let y =0; y <height-x; y++){
    length.push(" ");
  }
for(let y = 0; y < x + 1; y++){
    length.push("#")
  }
console.log(length.join(""));
length = [];
}
console.log("\n");
