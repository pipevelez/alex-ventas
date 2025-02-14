// Obtener la categoría desde la URL
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria');

// Datos de los productos
const productos = [
    {
        id: 1,
        nombre: 'Carro Modelo X',
        precio: 20000,
        imagen: 'images/carro1.jpg',
        categoria: 'carros',
        descripcion: 'Este es un carro muy confiable y eficiente en combustible.',
        imagenes: ['images/carro1.jpg', 'images/carro1-2.jpg', 'images/carro1-3.jpg']
    },
    {
        id: 2,
        nombre: 'Casa Moderna',
        precio: 150000,
        imagen: 'images/casa1.jpg',
        categoria: 'casas',
        descripcion: 'Amplia casa con 4 habitaciones y piscina.',
        imagenes: ['images/casa1.jpg', 'images/casa1-2.jpg', 'images/casa1-3.jpg']
    },
    {
        id: 3,
        nombre: 'Cadena de Oro',
        precio: 500,
        imagen: 'images/cadena1.jpg',
        categoria: 'joyeria',
        descripcion: 'Cadena de oro laminado de alta calidad.',
        imagenes: ['images/cadena1.jpg', 'images/cadena1-2.jpg', 'images/cadena1-3.jpg']
    },
    {
        id: 4,
        nombre: 'Camiseta Elegante',
        precio: 50,
        imagen: 'images/camiseta1.jpg',
        categoria: 'ropa-y-perfumeria',
        descripcion: 'Camiseta de algodón de alta calidad.',
        imagenes: ['images/camiseta1.jpg', 'images/camiseta1-2.jpg', 'images/camiseta1-3.jpg']
    },
    {
        id: 5,
        nombre: 'Finca Campestre',
        precio: 300000,
        imagen: 'images/finca1.jpg',
        categoria: 'fincas',
        descripcion: 'Finca ideal para descansar y disfrutar de la naturaleza.',
        imagenes: ['images/finca1.jpg', 'images/finca1-2.jpg', 'images/finca1-3.jpg']
    },
    // Puedes agregar más productos aquí
];

// Función para formatear el nombre de la categoría (eliminar guiones y capitalizar)
function formatearNombreCategoria(categoria) {
    return categoria
        .split('-') // Divide por guiones
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitaliza cada palabra
        .join(' '); // Une con espacios
}

// Cargar los productos de la categoría
function cargarProductosCategoria() {
    const productosFiltrados = productos.filter(p => p.categoria === categoria);
    const grid = document.querySelector('.grid');
    const nombreCategoria = document.getElementById('nombre-categoria');

    // Formatear el nombre de la categoría
    nombreCategoria.textContent = formatearNombreCategoria(categoria);

    // Limpiar el contenedor de productos
    grid.innerHTML = '';

    // Verificar si hay productos en la categoría
    if (productosFiltrados.length === 0) {
        grid.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
        return;
    }

    // Mostrar al menos 3 productos de la categoría
    for (let i = 0; i < 3; i++) {
        const producto = productosFiltrados[i] || {
            nombre: `Producto de ejemplo ${i + 1}`,
            precio: 100 * (i + 1),
            imagen: 'images/placeholder.jpg', // Imagen de placeholder
            descripcion: 'Descripción de ejemplo para este producto.',
            imagenes: ['images/placeholder.jpg']
        };

        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <a href="detalle-producto.html?id=${producto.id || i + 1}" class="btn-detalle">Ver Detalles</a>
            <a href="https://wa.me/1234567890?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${producto.nombre}" class="btn-whatsapp">Contactar por WhatsApp</a>
        `;
        grid.appendChild(div);
    }
}

// Cargar los productos al iniciar la página
document.addEventListener('DOMContentLoaded', cargarProductosCategoria);