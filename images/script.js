// Random Background Color Transition every 15 seconds
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color every 15 seconds
setInterval(() => {
    document.body.style.transition = 'background-color 3s ease';
    document.body.style.backgroundColor = getRandomColor();
}, 15000); // Change color every 15 seconds

// Scroll-to-Top Button Functionality
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
const fadeInSections = document.querySelectorAll('.profile-section, .social-links, footer');
window.addEventListener('scroll', () => {
    fadeInSections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});
