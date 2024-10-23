let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));


if (num1 % num2 === 0) {
    console.log(num1 + " es divisible por " + num2);
} else if (num2 % num1 === 0) {
    console.log(num2 + " es divisible por " + num1);
} else if (num1 % num3 === 0) {
    console.log(num1 + " es divisible por " + num3);
} else if (num3 % num1 === 0) {
    console.log(num3 + " es divisible por " + num1);
} else if (num2 % num3 === 0) {
    console.log(num2 + " es divisible por " + num3);
} else if (num3 % num2 === 0) {
    console.log(num3 + " es divisible por " + num2);
} else {
    console.log("Ninguno de los números es divisible por otro.");
}