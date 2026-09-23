const productosIniciales = [
  {
    id: 1,
    producto: "Botin adidas f50",
  },
  {
    id: 2,
    producto: "Botin nike phamthom",
  },
  {
    id: 3,
    producto: "Botin adidas predator",
  },
  {
    id: 4,
    producto: "Botin nike mercurial",
  },
  {
    id: 5,
    producto: "Botin nike total 90",
  },
];



if (!localStorage.getItem("misProductos")) {
  localStorage.setItem("misProductos", JSON.stringify(productosIniciales));
}



let productos = JSON.parse(localStorage.getItem("misProductos"));

const carrito = [];


function imprimirProductos() {

  const contenedorProductos = document.getElementById("productos");

  contenedorProductos.innerHTML = "";

  productos.forEach((producto) => {

    const card = document.createElement("article");

    card.classList.add("card");

    card.innerHTML = `
      <span>⚽</span>
      <h3>${producto.producto}</h3>
      <button id="${producto.id}">Agregar al carrito</button>
    `;

    contenedorProductos.appendChild(card);

    const btnCompra = document.getElementById(`${producto.id}`);

    btnCompra.addEventListener("click", () => {

      Toastify({
        text:`Producto agregado al carrito: ${producto.producto}`,
        duration: 3000,
        gravity: "top",
        position: "left",
        onClick: function () {}
      }).showToast();

      carrito.push(producto);
    });

  });
}



const inputProducto = document.getElementById("inputProducto");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const btnRestaurar = document.getElementById("btnRestaurar")

function mostrarEnDOM(){ imprimirProductos() }


btnAgregar.addEventListener("click", () => {

  const texto = inputProducto.value.trim();

  if (texto !== "") {

    const nuevoProducto = {
      id: Date.now(),
      producto: texto
    };

    productos.push(nuevoProducto);

  
    localStorage.setItem(
      "misProductos",
      JSON.stringify(productos)
    );

    imprimirProductos();

    
    inputProducto.value = "";
  }
});



imprimirProductos();


btnEliminar.addEventListener("click", () => {

  productos = [];

  localStorage.setItem("misProductos", JSON.stringify(productos));
  imprimirProductos();

});



btnRestaurar.addEventListener("click", () => {

  productos = productosIniciales;

  localStorage.setItem(
    "misProductos",
    JSON.stringify(productos)
  );

  imprimirProductos();

});