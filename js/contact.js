const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
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

    if (!message.value) {
        error.innerHTML += 'Message field is required<br>';
    }
})