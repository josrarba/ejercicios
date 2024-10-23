let longitud = parseFloat(prompt("ingrese la longitud")) 
let diametro = parseFloat(prompt("ingrese el diametro"))
let densidad = 3.5
let masa;

if(longitud < 7.5 && longitud > 9 && diametro < 0.5 && diametro > 1.3){
    console.log("barilla rechazada")
}else{
    let masa = longitud * diametro / densidad
    if(masa > 5.8){
        console.log("barilla no aceptada")
    }else{
        console.log("barilla aceptada")
    }
    
}
