
  function inicio () {
    let name = prompt("Ingresa tu nombre")
    alert ("Hola " + name + " Bienvenido a nuestra perfumería ")
}

inicio()

const perfumes = [
    { nombre: "Lattafa Khamarah", precio: 89000, categoría: "árabes", tamaño: "50ml" },
    { nombre: "Lataffa Asad Edp", precio: 41000, categoría: "árabes", tamaño: "50ml" },
    { nombre: "Lattafa Yara", precio: 40000, categoría: "árabes", tamaño: "100ml" },
    { nombre: "Good girl", precio: 298000, categoría: "Carolina Herrera", tamaño:"80ml" },
    { nombre: "212 vip rosé", precio: 157000, categoría: "Carolina Herrera", tamaño:"50ml" },
    { nombre: "Acqua di gio tradicional", precio: 297000, categoría: "Giorgio Armani", tamaño:"100ml" }
];
perfumes.forEach((perfume, index) => {
    console.log(index + " - perfume: " + perfume.nombre);
});

const preciodolar = perfumes.map((perfume) => {
    return {nombre: perfume.nombre, precio: perfume.precio / 1500, categoría: perfume.categoría, tamaño: perfume.tamaño};
});
console.table(perfumes);

let búsqueda = prompt(
"Buscá tu perfume"
)
let perfumeEncontrado = perfumes.find (
    (perfumes) => 
        perfumes.nombre.toUpperCase().trim() == búsqueda.toUpperCase().trim()
);

if ( perfumeEncontrado){
   console.log("El perfume está disponible y su precio es: $" + perfumeEncontrado.precio )
    console.log("Buscar en el catálogo su valor USD")
    console.table (preciodolar)
}else {
    console.log("perfume no disponible")
}

const carrito = perfumes.reduce((total, perfumes) => total + perfumes.precio, 0);
console.log("El total de tu compra es: $" + carrito)