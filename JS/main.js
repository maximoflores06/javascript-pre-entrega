function inicio (){
    let nombre = prompt("ingresa tu nombre")
    alert  ("bienvenido " + nombre)
    console.log (nombre + " ingresó a la página")
}
inicio()

const tareas = ["estudio", "cocinar", "hacer las compras","limpiar habitaciones", "preparar ropa de trabajo"]
console.log (tareas.join (","))

const agreagarfinal = tareas.push ("Poner ropa a lavar")
console.log ("se añadió una tarea")
console.log(tareas.join (","))

let agregarinicio = tareas.unshift ("Darle comida al perro")
console.log ("se agregó una tarea al inicio de la lista")
console.log (tareas.join (","))

const eliminar = tareas.pop ()
console.log ("se eliminó la tarea " + eliminar)
console.log (tareas.join (","))

let buscar = prompt ("Busque su tarea: ")
console.log (tareas.includes(buscar))
if (tareas.includes(buscar)){
    console.log ("la tarea " + buscar + " está en la lista " + "en la posición " + tareas.indexOf(buscar))
    alert ("la tarea " + buscar + " está en la lista " + "en la posición " + tareas.indexOf(buscar))
}
else{
    console.log ("la tarea " + buscar + " no está en la lista" )
    alert ("la tarea " + buscar + " no está en la lista")
}
console.log ("se cambió la tarea por Limpiar patio")
tareas.splice (1, 1, "limpiar patio")
console.log (tareas.join (","))

for (const tarea of tareas){
    console.log (" tarea a realizar : " + tarea)
}

