// === MENÚ RESPONSIVE ===
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.mobile-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Opcional: cambiar icono a X al abrir
        menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
}

// === TOGGLE DETALLES PRODUCTOS ===
document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

// === VALIDACIÓN FORMULARIO ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const campos = ['nombre', 'teléfono', 'email', 'mensaje'];
        let vacio = false;
        campos.forEach(campo => {
            if (!document.getElementById(campo).value.trim()) vacio = true;
        });
        if (vacio) {
            e.preventDefault();
            alert('Por favor, completa todos los campos.');
        }
    });
}

// === SLIDERS DE PRODUCTOS ===
const sliders = document.querySelectorAll('.slider-wrapper');
sliders.forEach((wrapper) => {
    let currentIndex = 0;
    const cards = wrapper.querySelectorAll('.product-card');
    const cardWidth = cards[0].offsetWidth + 20;
    const prevButton = wrapper.previousElementSibling;
    const nextButton = wrapper.nextElementSibling;

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});

// === CARRUSEL AUTOMÁTICO EN #INICIO ===
const slides = document.querySelectorAll('.carousel-slide');  // Selecciona todos los elementos con class "carousel-slide". Esto crea un array de slides para iterar.
let currentIndex = 0;  // Variable para el índice actual: Empieza en 0 (primer slide). Sirve para rastrear cuál slide mostrar.

function showNextSlide() {  // Función: Cambia al siguiente slide.
    slides[currentIndex].classList.remove('active');  // Quita la class "active" del slide actual: Esto lo oculta (opacidad 0 en CSS).
    currentIndex = (currentIndex + 1) % slides.length;  // Incrementa el índice: +1, y usa % para volver a 0 si llega al final (ej. 3 % 3 = 0).
    slides[currentIndex].classList.add('active');  // Agrega "active" al nuevo slide: Lo muestra (opacidad 1 en CSS).
}

setInterval(showNextSlide, 10000);  // setInterval: Ejecuta showNextSlide cada 5000 milisegundos (5 segundos). Es un temporizador automático.