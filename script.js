// Datos de productos destacados
const productosDestacados = [
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
    }
];

// Función para cargar productos destacados
function cargarProductosDestacados() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    productosDestacados.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <a href="detalle-producto.html?id=${producto.id}" class="btn-detalle">Ver Detalles</a>
            <a href="https://wa.me/1234567890?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${producto.nombre}" class="btn-whatsapp">Contactar por WhatsApp</a>
        `;
        grid.appendChild(div);
    });
}

// Cargar productos destacados al iniciar la página
document.addEventListener('DOMContentLoaded', cargarProductosDestacados);

// Control del menú desplegable (compatible con todos los dispositivos)
document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // Previene el scroll automático
        const dropdown = this.closest('.dropdown');
        dropdown.classList.toggle('active');
        
        // Cerrar otros dropdowns abiertos
        document.querySelectorAll('.dropdown').forEach(other => {
            if (other !== dropdown) other.classList.remove('active');
        });
    });

    // Soporte para eventos táctiles en dispositivos móviles
    btn.addEventListener('touchend', function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto en móviles
        const dropdown = this.closest('.dropdown');
        dropdown.classList.toggle('active');
        
        // Cerrar otros dropdowns abiertos
        document.querySelectorAll('.dropdown').forEach(other => {
            if (other !== dropdown) other.classList.remove('active');
        });
    });
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Cerrar dropdown al hacer clic en un enlace dentro del menú
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function() {
        const dropdown = this.closest('.dropdown');
        dropdown.classList.remove('active');
    });
});

// Cerrar dropdown en scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

// Reiniciar el menú al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});