// Obtener el ID del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');

// Datos de los productos (deben coincidir con los de script.js y categoria.js)
const productos = [
    {
        id: 1,
        nombre: 'Carro Modelo X',
        precio: 20000,
        descripcion: 'Este es un carro muy confiable y eficiente en combustible.',
        imagenes: ['images/carro1.jpg', 'images/carro1-2.jpg', 'images/carro1-3.jpg']
    },
    {
        id: 2,
        nombre: 'Casa Moderna',
        precio: 150000,
        descripcion: 'Amplia casa con 4 habitaciones y piscina.',
        imagenes: ['images/casa1.jpg', 'images/casa1-2.jpg', 'images/casa1-3.jpg']
    },
    {
        id: 3,
        nombre: 'Cadena de Oro',
        precio: 500,
        descripcion: 'Cadena de oro laminado de alta calidad.',
        imagenes: ['images/cadena1.jpg', 'images/cadena1-2.jpg', 'images/cadena1-3.jpg']
    },
    {
        id: 4,
        nombre: 'Camiseta Elegante',
        precio: 50,
        descripcion: 'Camiseta de algodón de alta calidad.',
        imagenes: ['images/camiseta1.jpg', 'images/camiseta1-2.jpg', 'images/camiseta1-3.jpg']
    },
    {
        id: 5,
        nombre: 'Finca Campestre',
        precio: 300000,
        descripcion: 'Finca ideal para descansar y disfrutar de la naturaleza.',
        imagenes: ['images/finca1.jpg', 'images/finca1-2.jpg', 'images/finca1-3.jpg']
    }
];

// Cargar los detalles del producto
function cargarDetalleProducto() {
    const producto = productos.find(p => p.id == productoId);
    if (producto) {
        // Mostrar el nombre del producto
        document.getElementById('nombre-producto').textContent = producto.nombre;

        // Mostrar la descripción del producto
        document.getElementById('descripcion-producto').textContent = producto.descripcion;

        // Configurar el enlace de WhatsApp
        const btnWhatsapp = document.getElementById('btn-whatsapp');
        btnWhatsapp.href = `https://wa.me/1234567890?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${producto.nombre}`;

        // Cargar las imágenes en el carrusel
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.innerHTML = '';
        producto.imagenes.forEach(imagen => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `<img src="${imagen}" alt="${producto.nombre}">`;
            swiperWrapper.appendChild(slide);
        });

        // Inicializar Swiper (una imagen a la vez)
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1, // Solo una imagen visible
            spaceBetween: 0,  // Sin espacio entre las imágenes
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true, // Permite el bucle infinito
        });
    } else {
        // Si no se encuentra el producto, mostrar un mensaje
        document.getElementById('nombre-producto').textContent = 'Producto no encontrado';
    }
}

// Cargar los detalles al iniciar la página
document.addEventListener('DOMContentLoaded', cargarDetalleProducto);