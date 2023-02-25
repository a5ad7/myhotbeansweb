const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const about = document.getElementById('about');
const form = document.getElementById('form'); 

const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (error.innerHTML) {
        error.innerHTML = "";
    }

    if (!username.value) {
        error.innerHTML += 'Name field is required<br>';
    }

    if (!email.value) {
        error.innerHTML += 'Email field is required<br>';
    }

    if (!phone.value) {
        error.innerHTML += 'Phone field is required<br>';
    }

    if (!about.value) {
        error.innerHTML += 'About field is required<br>';
    }
})