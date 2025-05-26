// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3 },
        move: { enable: true, speed: 1 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

// Theme Toggle (Dark Mode)
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Scroll-to-Top Button
const scrollTopBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in Effect on Scroll
const fadeInSections = document.querySelectorAll('.fade-in-section');
window.addEventListener('scroll', () => {
    fadeInSections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Loading Spinner
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});
