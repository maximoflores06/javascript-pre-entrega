function inicio (){
    let nombre = prompt("ingresa tu nombre")
    alert  ("bienvenido " + nombre)
}
inicio ()
function sumar (a, b){
    let resultado = a + b;
    return resultado;
}
const restar = (a, b) => a - b
const dividir = (a, b) => a / b


let operación = Number (prompt(
    "que operación realizaras?\n" +
    "1.suma\n" +
    "2.resta \n" +
    "3.división\n"+
    "0.salir "
)
);
while (operación != 0){
let nro1 = Number (prompt ("ingrese el valor 1"))
let nro2 = Number (prompt ("ingrese el valor 2"))

switch (operación) {
    case 1: console.log(sumar (nro1, nro2))
    alert ("tu resultado es " + sumar (nro1, nro2))
    break;
    case 2: console.log(restar (nro1, nro2))
     alert ("tu resultado es " + restar (nro1, nro2))
    break;
    case 3: console.log(dividir(nro1,nro2))
    alert ("tu resultado es " +dividir(nro1,nro2))
    default:
}

operación = Number (prompt(
    "que operación realizaras?\n" +
    "1.suma\n" +
    "2.resta \n" +
    "3.división\n"+
    "0.salir "
)
);
}
console.log ("saliste del programa")
alert ("Saliste del programa");
