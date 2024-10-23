let num1 = parseInt(prompt("ingrese el primer numero"))
let num2 = parseInt(prompt("ingrese el segundo numero"))
let num3 = parseInt(prompt("ingrese el tercer numero"))

if(num1 == num2 && num1 == num3){
    console.log("los tres numero son iguales")
}else if(num1 == num2){
    console.log("el numero: " + num1, "y el numero:" + num2, "son iguales")
}else if(num2 == num3){
    console.log("el numero: " + num2, "y el numero:" + num3, "son iguales")
}else if(num1 == num3){
    console.log("el numero: " + num1, "y el numero:" + num3, "son iguales")
}
    
else{
    if(num1 > num2 && num1 > num3){
        console.log("el numero mayor es: ", num1)
    }else if(num2 > num1 && num2 > num3){
        console.log("el numero meyor es: ", num2)
    }else{
        console.log("el numero mayor es: ", num3)
    }
}




