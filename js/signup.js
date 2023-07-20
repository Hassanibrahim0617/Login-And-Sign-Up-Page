const form = document.querySelector('form');;

form.addEventListener('submit', checkSignup)
function checkSignup(event){
    event.preventDefault();
    console.dir(event)
    let firstname = event.currentTarget.firstname.value;
    let lastname = event.currentTarget.lastname.value;
    let username = event.currentTarget.username.value;
    let password = event.currentTarget.password.value;
    let phoneNumber = event.currentTarget.number.value;
    let emailAddress = event.currentTarget.emailAddress.value;
    let gender = event.currentTarget.gender.value;
    let radio = event.currentTarget.radio.value;
    let checkbox = event.currentTarget.checkbox.value;
    let textarea = event.currentTarget.textarea.value;
}