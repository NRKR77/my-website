// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Smooth transition of background color every 10 seconds
setInterval(() => {
    document.body.style.transition = 'background-color 5s ease-in-out';
    document.body.style.backgroundColor = getRandomColor();
}, 10000); // Change every 10 seconds

// Particles.js Setup
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 3 },
        move: { enable: true, speed: 1 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

// Dark Mode Toggle
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

// Scroll-to-Top Button Visibility
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

// Fade-in Sections on Scroll
const fadeInSections = document.querySelectorAll('.fade-in-section');
window.addEventListener('scroll', () => {
    fadeInSections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("All fields are required!");
    }
});

// Loading Spinner
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});
