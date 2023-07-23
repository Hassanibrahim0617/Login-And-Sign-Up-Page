const form = document.querySelector('form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const phoneNumber = document.querySelector('#phone-number');
const emailAddress = document.querySelector('#Email-address');
const gender = document.querySelector('#gender');
const small = document.querySelectorAll('small')
const errorMsg = ['first name field blank', 'last name field blank', 'username field blank', 'password field blank', 'password does not match',
    'add phone number', 'email field blank', 'add a valid email', 'fill this blank space'];

// console.dir(errorMsg)


function submitSignUp() {
    if (firstname.value.trim() === '') {
        let form = firstname.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'block';
        small.textContent = errorMsg[0];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = firstname.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    }

    if (lastname.value.trim() === '') {
        let form = lastname.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'block';
        small.textContent = errorMsg[1];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = lastname.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    }

    if (username.value.trim() === '') {
        let form = username.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'block';
        small.textContent = errorMsg[2];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = username.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    }

    if (password.value.trim() === '') {
        let form = password.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'block';
        small.textContent = errorMsg[3];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = password.parentElement;
        let errorMsg = form.querySelector('small');
        errorMsg.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    }
}



form.addEventListener('submit', checkSignup)
function checkSignup(event) {
    event.preventDefault();
    console.dir(event)
    submitSignUp()
}