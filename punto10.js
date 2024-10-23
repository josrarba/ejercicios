let cl1 = parseFloat(prompt("ingrese su primera nota"))
let cl2 = parseFloat(prompt("ingrese su segunda nota"))
let cl3 = parseFloat(prompt("ingrese su trcera nota"))

let promedio;

if(cl1 > cl2 && cl1 > cl3 && cl2 > cl3){
    promedio = (cl1 + cl2) / 2
    console.log("su promedio es de: ", promedio);
} else if(cl1 > cl3 && cl1 > cl2 && cl3 > cl2){
    promedio = (cl1 + cl3) / 2
    console.log("su promedio es de: ", promedio);
}
if(cl2 > cl1 && cl2 > cl3 && cl1 > cl3){
    promedio = (cl2 + cl1) / 2
    console.log("su promedio es de: ", promedio);
} else if(cl2 > cl3 && cl2 > cl1 && cl3 > cl1){
    promedio = (cl2 + cl3) / 2
    console.log("su promedio es de: ", promedio);
}
if(cl3 > cl2 && cl3 > cl1 && cl1 > cl2){
    promedio = (cl3 + cl1) / 2
    console.log("su promedio es de: ", promedio);
} else if(cl3 > cl2 && cl3 > cl1 && cl2 > cl1){
    promedio = (cl3 + cl2) / 2
    console.log("su promedio es de: ", promedio);
}
