const form = document.querySelector('form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const phoneNumber = document.querySelector('#phone-number');
const emailAddress = document.querySelector('#email-address');
const gender = document.querySelector('#gender');
const small = document.querySelectorAll('small');
const htmlRadio = document.querySelector('#htmlradio');
const cssRadio = document.querySelector('#cssradio');
const jsRadio = document.querySelector('#jsradio');
const phpRadio = document.querySelector('#phpradio');
const rubyRadio = document.querySelector('#rubyradio');
const intercalRadio = document.querySelector('#intercalradio');
const radio = document.querySelector('.radio')
const terms = document.querySelector('#terms')
const offers = document.querySelector('#offers')
console.dir(terms)
console.dir(offers)
const errorMsg = ['first name field blank', 'last name field blank', 'username field blank', 'password field blank', 'confirm password', 'password does not match',
    'add phone number', 'email field blank', 'add a valid email', 'add a gender', 'choose one field', 'click on agree'];

// console.dir(errorMsg)


function validate() {
    // firstname validation
    if (firstname.value.trim() === '') {
        let form = firstname.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[0];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = firstname.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    // lastname validation
    if (lastname.value.trim() === '') {
        let form = lastname.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[1];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = lastname.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    // username validation
    if (username.value.trim() === '') {
        let form = username.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[2];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = username.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    // password validation
    if (password.value.trim() === '') {
        let form = password.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[3];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = password.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    // confirm-password validation
    if (confirmPassword.value.trim() === '') {
        let form = confirmPassword.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[4];
        form.classList.add('error');
        form.classList.remove('success');
    }
    else if (confirmPassword.value.trim() !== password.value.trim()) {
        let form = confirmPassword.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[5];
        form.classList.add('error');
        form.classList.remove('success');
    }
    else {
        let form = confirmPassword.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    // phone number validation
    if (phoneNumber.value.trim() === '') {
        let form = phoneNumber.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[6];
        form.classList.add('error');
        form.classList.remove('success');
    }
    else
        if (!isValidPhone(phoneNumber.value.trim())){
            let form = phoneNumber.parentElement;
            let displayError = form.querySelector('small');
            displayError.style.display = 'block';
            displayError.textContent = 'incorect phone number';
            form.classList.add('error');
            form.classList.remove('success');
        }
        else {
            let form = phoneNumber.parentElement;
            let displayError = form.querySelector('small');
            displayError.style.display = 'none';
            form.classList.add('success');
            form.classList.remove('error');
        };

    // email address validation
    if (emailAddress.value.trim() === ''){
        let form = emailAddress.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[7];
        form.classList.add('error');
        form.classList.remove('success');
    }
    else if (!isValidMail(emailAddress.value.trim())){
            let form = emailAddress.parentElement;
            let displayError = form.querySelector('small');
            displayError.style.display = 'block';
            displayError.textContent = 'You have entered an invalid email address!';
            form.classList.add('error');
            form.classList.remove('success');
        }
        else {
            let form = emailAddress.parentElement;
            let displayError = form.querySelector('small');
            displayError.style.display = 'none';
            form.classList.add('success');
            form.classList.remove('error');
        };

    // gender validation
    if (gender.value.trim() === 'select gender') {
        let form = gender.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[9];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = gender.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    // radio validation
    if (htmlRadio.value === '' || cssRadio.value === '' || jsRadio.value === '' || phpRadio.value === '' || rubyRadio.value === '' || intercalRadio.value === '') {
        let formRadio = radio.parentElement;
        let displayError = formRadio.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[10];
        formRadio.classList.add('error');
        formRadio.classList.remove('success');
    } else {
        let formRadio = radio.parentElement;
        let displayError = formRadio.querySelector('small');
        displayError.style.display = 'none';
        formRadio.classList.add('success');
        formRadio.classList.remove('error');
    };

    // checkbox validation
    if (!terms.checked) {
        let form = terms.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[11];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = terms.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };

    if (!offers.checked) {
        let form = offers.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'block';
        displayError.textContent = errorMsg[11];
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        let form = offers.parentElement;
        let displayError = form.querySelector('small');
        displayError.style.display = 'none';
        form.classList.add('success');
        form.classList.remove('error');
    };
};



form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.dir(e)
    validate()

    let userData = {
        fname: firstname.value,
        lname: lastname.value,
        user: username.value,
        pass: password.value,
        cpass: confirmPassword.value,
        pnumber: phoneNumber.value,
        email: emailAddress.value,
        gender: gender.value,
        radio: {
            htmlRadio,
            cssRadio,
            jsRadio,
            phpRadio,
            rubyRadio,
            intercalRadio
        },
        tchecked: terms.value,
        ochecked: offers.value
    };
    let jsonUserData = JSON.stringify(userData);
    localStorage.setItem('user', jsonUserData);
});


// Regress expression function
function isValidMail(emailAddress) {
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress);
};
function isValidPhone(phoneNumber) {
    /^(?:(?:\+|00)\d{1,3}\s?)?(?:(?:\(\d{1,4}\)|\d{1,4})(?:\s|-)?\d{1,4}(?:\s|-)?\d{1,4}(?:\s|-)?\d{1,9})$/.test(phoneNumber);
};