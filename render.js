// Tu archivo render.js
const contenedor = document.getElementById('contenedor');
const btnTodos = document.getElementById('btnTodos');
const btnBatman = document.getElementById('btnBatman');
const btnMarvel = document.getElementById('btnMarvel');
const btnSerie = document.getElementById('btnSerie');
const btnDC = document.getElementById('btnDC');
const btnVerMas = document.getElementById('btnVerMas'); // Agrega este botón

let productosMostrados = 3; // Establece la cantidad inicial de productos a mostrar
let categoriaActual = 'Todos'; // Categoría actual seleccionada

// Función para mostrar productos según la categoría y la cantidad especificada
function mostrarProductos(categoria, cantidad) {
    contenedor.innerHTML = ''; // Limpiar el contenedor

    let productosFiltrados = productsData.filter(producto => categoria === 'Todos' || producto.category === categoria);
    productosFiltrados.slice(0, cantidad).forEach(producto => {
        contenedor.innerHTML += `<div class="funko">
        <img src=${producto.cardImg}>
        <div class="hero-card-info">
            <div class="hero-card-top">
                <h3>${producto.name}</h3>
    
            </div>
            <div class="hero-card-button">
                <div class="hero-card-creator">
                    <img class="logo" src=${producto.logo}>
                </div>
                <div class="hero-card-price">
                    <span>${producto.category}</span>
                </div>
            </div>
        </div>
            
            
        `;
    });

    // Verificar si hay más productos para mostrar
    if (productosFiltrados.length <= cantidad) {
        btnVerMas.style.display = 'none'; // Ocultar el botón "Ver Más"
    } else {
        btnVerMas.style.display = 'block'; // Mostrar el botón "Ver Más"
    }
}

// Event listeners para los botones
btnTodos.addEventListener('click', () => {
    productosMostrados = 3; // Restablecer la cantidad de productos mostrados
    categoriaActual = 'Todos'; // Actualizar la categoría actual
    mostrarProductos('Todos', productosMostrados);
});

btnBatman.addEventListener('click', () => {
    productosMostrados = 3; // Restablecer la cantidad de productos mostrados
    categoriaActual = 'Batman'; // Actualizar la categoría actual
    mostrarProductos('Batman', productosMostrados);
});

btnMarvel.addEventListener('click', () => {
    productosMostrados = 3; // Restablecer la cantidad de productos mostrados
    categoriaActual = 'Marvel'; // Actualizar la categoría actual
    mostrarProductos('Marvel', productosMostrados);
});

btnSerie.addEventListener('click', () => {
    productosMostrados = 3; // Restablecer la cantidad de productos mostrados
    categoriaActual = 'Serie'; // Actualizar la categoría actual
    mostrarProductos('Serie', productosMostrados);
});

btnDC.addEventListener('click', () => {
    productosMostrados = 3; // Restablecer la cantidad de productos mostrados
    categoriaActual = 'DC'; // Actualizar la categoría actual
    mostrarProductos('DC', productosMostrados);
});

btnVerMas.addEventListener('click', () => {
    productosMostrados += 3; // Aumentar la cantidad de productos a mostrar en 3
    mostrarProductos(categoriaActual, productosMostrados); // Mostrar más productos de la categoría actual
});

// Mostrar todos los objetos al cargar la página
mostrarProductos('Todos', productosMostrados);







