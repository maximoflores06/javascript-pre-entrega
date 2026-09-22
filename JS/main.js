const productos = [
  {
    id: 1,
    nombre: "Guitarra Gracia M10",
    descripcion: "Guitarra criolla con equipo de sonido integrado y afinador",
    precio: 120000,
    imagen: "🎸",
  },
  {
    id: 2,
    nombre: "Violin  Cremona SV-50",
    descripcion: " tapa de abeto macizo y buena estabilidad de afinación.",
    precio: 150000 ,
    imagen: "🎻",
  },
  {
    id: 3,
    nombre: "Teclado Yamaha PSR-E283",
    descripcion: "61 teclas y variables de sonido",
    precio: 327000,
    imagen: "🎹",
  },
  {
    id: 4,
    nombre: "Micrófono Shure SM58",
    descripcion: "Estándar de la industria para presentaciones en vivo. Controla el ruido de fondo, resiste golpes y hace que la voz destaque",
    precio: 250000,
    imagen: "🎤",
  },
  {
    id: 5,
    nombre: "Metrónomo digital",
    descripcion: "Recargable y de facil uso",
    precio: 50000,
    imagen: "🎚️",
  },
];
const titulo = document.getElementById("titulo");
titulo.innerText = "Tu music";

const texto = document.createElement ("p");
texto.innerText = "Explora nuestros intrumentos";


const subtitulo = document.querySelector("h2");
subtitulo.appendChild(texto);

const carrito = [];

function imprimirProducto (){

const contenedorProductos = document.getElementById("productos");
contenedorProductos.innerHTML = "";
productos.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("card");
  card.innerHTML = `

   
      <span>${producto.imagen}</span>
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button id="${producto.nombre}${producto.id}">agregar al  carrito</button>

  `;

  contenedorProductos.appendChild(card);

  const btnProducto = document.getElementById(
    `${producto.nombre}${producto.id}`,
  );

  btnProducto.addEventListener("click" , () => {
        Toastify({
    text: `Producto agregado al carrito: ${producto.nombre}`,
    duration: 3000,
    gravity: "top", 
    position: "center", 
    onClick: function(){} 
}).showToast()
        carrito.push(producto);
  })
});
}
imprimirProducto()

const btn = document.getElementById("button");

function acciondelboton() {
    alert("click");

}

function agregarProducto () {
    const formParaProductos = document.getElementById("form-agregar-producto")
    formParaProductos.addEventListener("submit", (e) => {
        e.preventDefault();

    const inputNombre = document.getElementById("input-nombre").value;
   

    const inputPrecio = document.getElementById("input-precio").value;
    
    
    const inputImagen = document.getElementById("input-imagen").value;
    

    const inputDescripcion = document.getElementById("input-descripcion").value;
    


    productos.push({nombre: inputNombre, precio: inputPrecio, imagen: inputImagen,
        descripcion: inputDescripcion
    })
    
imprimirProducto()

});
}
agregarProducto()