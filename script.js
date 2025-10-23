const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');
const sliders = document.querySelectorAll('.slider-wrapper');

// Menú responsive
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Toggle detalles
document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});

// Validación del formulario de contacto

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('teléfono').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !telefono || !email || !mensaje) {
            e.preventDefault();
            alert('Por favor, completa todos los campos.');
        }
    });
}

sliders.forEach((wrapper) => {
    let currentIndex = 0; // Índice actual, repito: inicia en 0 para el primer producto.
    const cards = wrapper.querySelectorAll('.product-card'); // Todas las tarjetas en este wrapper.
    const cardWidth = cards[0].offsetWidth + 20; // Ancho de una tarjeta + gap (20px del CSS). offsetWidth mide el ancho real.
    const prevButton = wrapper.previousElementSibling; // Botón prev (hermano anterior).
    const nextButton = wrapper.nextElementSibling; // Botón next (hermano siguiente).

    // Event listener para botón next: mueve a la derecha.
    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) { // Si no estamos en la última tarjeta.
            currentIndex++; // Aumenta el índice (repito: currentIndex es la posición actual).
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Mueve el wrapper a la izquierda. translateX es CSS transform para deslizar.
        }
    });

    // Event listener para botón prev: mueve a la izquierda.
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) { // Si no estamos en la primera.
            currentIndex--; // Disminuye el índice.
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Mueve de vuelta.
        }
    });
});