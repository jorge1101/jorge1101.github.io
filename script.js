// Al cargar la página, muestra un mensaje de bienvenida
window.onload = function() {
    alert('¡Bienvenido a mi portafolio!');
};

// Función para alternar la visibilidad de las secciones al hacer clic en sus títulos
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const title = section.querySelector('h2');

        if (title) {
            title.addEventListener('click', function() {
                const content = section.querySelector('p, ul');

                // Alterna la visibilidad del contenido al hacer clic en el título
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        }
    });
});

// Función para cambiar el tema de la página (modo claro/oscuro)
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Modo Oscuro';
    themeButton.classList.add('theme-button');
    document.body.prepend(themeButton);

    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
