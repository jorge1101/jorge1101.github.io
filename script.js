// Añadir alguna animación o efecto en scroll si lo deseas
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio cargado correctamente");

    // Ejemplo: cambiar el color de los enlaces del menú al hacer scroll
    window.addEventListener('scroll', () => {
        const navLinks = document.querySelectorAll('nav ul li a');
        if (window.scrollY > 50) {
            navLinks.forEach(link => link.style.color = '#ff9900');
        } else {
            navLinks.forEach(link => link.style.color = '#fff');
        }
    });
});
