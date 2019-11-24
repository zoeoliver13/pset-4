const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 24;
let height;
let mario;
console.log();
while( Number.isNaN(height)|| !Number.isInteger(height) ||MIN > height||height > MAX){
  height = Number(readlineSync.question("Height: "));
}
console.log()
let row = height
while (row > 0) {
    mario = ""
    for (let i = 0; i <= height; i++) {
        mario = mario + "#"
    }for (i = 0; i < row - 1; i++) {
        mario = mario.replace(mario.charAt(i), " ");
    }
    console.log(mario);
    row = row - 1
}
console.log();
