// Dark Mode Toggle
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.documentElement.style.transition = "background-color 0.3s, color 0.3s"; // Smooth transition
});

// Scroll to Top Button
const scrollTopButton = document.querySelector('.scroll-top-btn');

// Show button when scrolled down 100px or more
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
