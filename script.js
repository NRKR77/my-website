// Dark Mode Toggle
const themeToggleButton = document.querySelector('.theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll-to-Top Button Visibility
window.onscroll = function() {
    let scrollBtn = document.querySelector('.scroll-top-btn');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
};

// Scroll to Top Function
document.querySelector('.scroll-top-btn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
