const productos = ["mouse", "teclados", "auriculares"]

setTimeout (() => alert ("20% off en auriculares"),5000)

localStorage.setItem ("carrito", JSON.stringify(productos))

function obternerCarrito() {

try {
       const carrito = localStorage.getItem("carrito");

    if (carrito == null) {
        return [];
    } else {
        return JSON.parse(carrito);
    }

}catch (error) {
    console.error("Error al obtener el carrito:");
    return [];
} finally {
    console.log("Operación de obtención del carrito finalizada.");
}
}

const carrito = obternerCarrito();
console.log("su carrito contiene: ", carrito);

