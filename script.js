// Show Login page
function showLoginPage() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'none';
}

// Show Sign Up page
function showSignupPage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'block';
    document.getElementById('main-page').style.display = 'none';
}

// Show Main page
function showMainPage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
}

// Check if the user is logged in
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        showMainPage();
    } else {
        showLoginPage();
    }
}

// Sign Up form handling
document.getElementById('sign-up-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    if (email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Sign Up Successful! You can now log in.');

        showLoginPage();
    } else {
        alert('Please enter both email and password.');
    }
});

// Log In form handling
document.getElementById('log-in-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('log-in-email').value;
    const password = document.getElementById('log-in-password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login Successful!');
        showMainPage();
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

// Switch to Sign Up page
document.getElementById('go-to-signup').addEventListener('click', function(e) {
    e.preventDefault();
    showSignupPage();
});

// Switch to Login page
document.getElementById('go-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    showLoginPage();
});

// Log out function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    showLoginPage();
}
