mensaje = "Bienvenido al soporte de socios del club";
alert(mensaje);
let usuario = ""
let contrasenia =""
while ( usuario !== "Maximo Flores" || contrasenia !== "1234"
){
 usuario = prompt("ingresa tu nombre")
 contrasenia = prompt ("ingresa tu contraseña")
if (usuario !== "Maximo Flores" || contrasenia !== "1234")
    mensaje = "Usuario o contraseña incorrectos"
    alert (mensaje)
    console.log ("usuario o contraseña incorrectos");
}
console.log ("usuario y contraseña correctos")
mensaje = "BIENVENIDO"
alert (mensaje);
let edad = Number(prompt("ingresa tu edad"))
if (edad >= 18){
console.log ("el socio es: mayor")
mensaje = "Eres MAYOR"
alert (mensaje);
}
else if (edad >= 15 && edad <=17){
    console.log ("el socio es: cadete mayor")
mensaje = "Eres CADETE MENOR"
alert (mensaje);
}
else {
    console.log ("el socio es: cadete menor")
    mensaje = "Eres CADETE MENOR"
    alert (mensaje);
}


