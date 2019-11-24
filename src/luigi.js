const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 24;
let height;
let mario;
let luigi;

console.log();
while( Number.isNaN(height)|| !Number.isInteger(height) ||MIN > height||height > MAX){
  height = Number(readlineSync.question("Height: "));
}

console.log();
let row = height;
while (row > 0) {
    mario = "";
    luigi ="";
    for (let i = 0; i <= height; i++) {
        mario = mario + "#"
    }for (i = 0; i < row - 1; i++) {
        mario = mario.replace(mario.charAt(i), " ");
    }for (let i = row - 2; i < height; i++) {
      luigi = luigi + "#";
    }
  console.log(mario+" "+luigi);
  row = row - 1;
}
console.log();
