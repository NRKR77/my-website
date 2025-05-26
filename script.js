// script.js

// Interactive background movement with mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth * 100;
    const mouseY = e.clientY / window.innerHeight * 100;
    document.body.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
});

// Dark Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
