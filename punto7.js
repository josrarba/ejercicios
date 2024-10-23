let nombre = prompt("ingrese su nombre")
let edad = parseInt(prompt("ingrese su edad "))
let sexo = prompt("ingrese su sexo (hombre/mujer)")
let estadoCivil = prompt("ingrese su estado civil (solter@/casad@)")

if(sexo == "hombre" && estadoCivil == "casado" && edad >= 40 ){
    document.write("su nombre es: " + nombre)
}
else if(sexo == "mujer" && estadoCivil == "soltera" && edad <=50 ){
    document.write("su nombre es: " + nombre)
}
else(
    document.write("no valido")
)