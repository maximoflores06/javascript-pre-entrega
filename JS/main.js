
  function inicio () {
    let name = prompt("Ingresa tu nombre")
    alert ("Hola " + name + " Bienvenido a nuestra tienda gamer")
}

inicio()

class producto {
    constructor (nombre, precio, marca ,stock, ofertaporcentaje, oferta) {
        this.nombre = nombre
        this.precio = precio
        this.marca = marca
        this.stock = stock
        this.ofertaporcentaje = ofertaporcentaje
        this.oferta = oferta
    }

ofertaproducto(){
    let preciooferta = this.precio - (this.precio * this.ofertaporcentaje / 100)
    return preciooferta
}

fechaOferta(){
    console.log("el producto " + this.nombre + " está en oferta hasta el día " + this.oferta)
}
}

const producto1 = new producto ("auriculares bluetooth", 100000, "red dragon", 14, 10, "10/10/2026")
console.log(producto1)
console.log("Precio en oferta: $" + producto1.ofertaproducto())
producto1.fechaOferta()


const producto2 = new producto ("mouse precición", 70000, "logitech", 35, 10 ,"23/9/2026") 
console.log(producto2)
console.log("Precio en oferta: $" + producto2.ofertaproducto())
producto2.fechaOferta()


const producto3 = new producto ("teclado mecánico", 90000, "red dragon", 20, 10, "30/9/2026")
console.log(producto3)
console.log("Precio en oferta: $" + producto3.ofertaproducto())
producto3.fechaOferta()


const producto4 = new producto ("mousepad", 30000, "logitech", 40, 10, "25/9/2026")
console.log(producto3)
console.log("Precio en oferta: $" + producto4.ofertaproducto())
producto3.fechaOferta()
