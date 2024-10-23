let nota1 = parseInt(prompt("ingresa su primera nota"))
let nota2 = parseInt(prompt("ingresa su segunda nota"))
let nota3 = parseInt(prompt("ingresa su tercera nota"))
let nota4 = parseInt(prompt("ingresa su cuarta nota"))
let nota5 = parseInt(prompt("ingresa su quinta nota"))

let promedio = nota1 + nota2 + nota3 + nota4 + nota5 / 5

if(promedio <= 74){
    console.log("reprobó")
} else{
    if(promedio >= 75 ){
        console.log("aprobó")
    }
}