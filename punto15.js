let a = 3;
let b = 7;
let c = 2;

let x1;
let x2;

let minusB = b * -1;
x1 = (minusB - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
x2 = (minusB + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

console.log(`x1 = ${x1}`);
console.log(`x2 = ${x2}`);
