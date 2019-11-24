const readlineSync = require("readline-sync");
let MAX = 9999999999999999;
let MIN = 1;
let cardNum= 0
let otherNum= 0
let sum = 0
let digitAmount = 0
let firstDigit = 0
let secondDigit = 0
let other = 0;
let thingy = 1;

console.log();
while (cardNum< MIN || cardNum> MAX || Number.isNaN(cardNum) || !Number.isInteger(cardNum)){
  cardNum= Number(readlineSync.question("Number: "));
}
otherNum = cardNum;

while (otherNum>= 1) {
  otherNum /= 10;
  digitAmount+= 1;
}
firstDigit = Math.floor(cardNum/ 10 ** (digitAmount- 1));
secondDigit = (Math.floor(cardNum/ 10 ** (digitAmount- 2)) / 10) * 10;

for (let i = 0; i < digitAmount; i++) {
  other = (cardNum- Math.floor(cardNum/ 10) * 10);
  cardNum= Math.floor(cardNum/ 10);
  if (i % 2 == 1) {
    if (other * 2 >= 10) {
      sum += ((other * 2 - other * 2 % 10) / 10 + other * 2 % 10);
    }
    else if (other * 2 < 10) {
      sum += other * 2;
    }
  }
  else {
    sum += other;
  }
  thingy += 1;
}

if ((digitAmount== 13 || digitAmount== 16) && firstDigit == 4) {
  console.log("\nVisa.\n")
}else if (digitAmount== 15 && (secondDigit == 34 || secondDigit == 37)) {
  console.log("\nAmex.\n")
}else if (digitAmount== 16 && (secondDigit <= 55 && secondDigit >= 51)) {
  console.log("\nMastercard.\n")
}else if (sum / 10 % 1 != 0) {
    console.log("\nInvalid.\n")
}
