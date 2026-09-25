const URL = "../JS/json/productos.json";
const formularioBotines = document.getElementById("formularioBotines")
const Botines = document.getElementById("idBotines")
const resultado= document.getElementById("resultado")



formularioBotines.addEventListener("submit", BuscarBotin )

async function cargarCatalogo() {

    try {

        const respuesta = await fetch(URL);

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos");
        }

        const productos = await respuesta.json();

        mostrarProductos(productos);

    } catch (error) {

        console.error(error);

        Swal.fire({
            title: "Error",
            text: "No se pudo cargar el catálogo",
            icon: "error"
        });

    } finally {

        console.log("Carga del catálogo finalizada");

    }
}

function mostrarProductos(productos) {

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";

    productos.forEach(producto => {

        catalogo.innerHTML += `
            <article class="producto">

            
                <h2>${producto.nombre}</h2>

                <p>$${producto.precio}</p>

               

            </article>
        `;

    });
}

cargarCatalogo();


async function BuscarBotin(event){
    
  event.preventDefault();
  const nombre = Botines.value.toLowerCase();


  try{
    const respuesta = await fetch(URL);

    if(!respuesta.ok){
      throw new Error("La peticion no es correcta")
    }

    const Botin = await respuesta.json();

    const producto = Botin.find(
    producto => producto.nombre.toLowerCase() === nombre)

    if (!producto) {
      throw new Error("Modelo no encontrado");
     }


    console.log(Botin)
  
    resultado.innerHTML = `
    <article class="card">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
            </article>`
  
  }catch (error) {
    console.error(error);
    Swal.fire({
    title: "Botin no encontrado",
    text: "No hay en stock",
    icon: "error"
    
    
  });
  }}

  setTimeout (() => {Swal.fire({ 
  title: "<strong>Hay una <u>oferta</u></strong>",
  icon: "info",
  html: `
    20% off <b>en botines </b>,
    <a href="#" autofocus>Adidas</a>
  `,
});}, 4000)