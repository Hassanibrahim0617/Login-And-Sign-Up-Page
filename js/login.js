const form = document.querySelector('form');;
const username = document.querySelector('#username');
const pass = document.querySelector('#pass');
const formDiv = document.querySelectorAll('.form-div');

function validate() {
    if (username.value.trim() === '') {
        let formDiv = username.parentElement;
        let errorMsg = formDiv.querySelector('small');
        errorMsg.style.display = 'block';
        errorMsg.textContent = "Please provide a valid username";
        formDiv.classList.add('error');
        formDiv.classList.remove('success');
    } else {
        let formDiv = username.parentElement;
        let errorMsg = formDiv.querySelector('small');
        errorMsg.style.display = 'none';
        formDiv.classList.add('success');
        formDiv.classList.remove('error');
    }

    if (pass.value.trim() === '') {
        let formDiv = pass.parentElement;
        let errorMsg = formDiv.querySelector('small');
        errorMsg.style.display = 'block';
        errorMsg.textContent = "Please provide a valid password";
        formDiv.classList.add('error');
        formDiv.classList.remove('success');
    } else {
        let formDiv = pass.parentElement;
        let errorMsg = formDiv.querySelector('small');
        errorMsg.style.display = 'none';
        formDiv.classList.add('success');
        formDiv.classList.remove('error');
    }
}

form.addEventListener('submit', checkLogin);
function checkLogin(event) {
    event.preventDefault();
    console.dir(event);
    validate();
};