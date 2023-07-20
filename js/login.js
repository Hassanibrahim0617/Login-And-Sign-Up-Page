const form = document.querySelector('form');;

form.addEventListener('submit', chexckLogin)
function chexckLogin(event){
    event.preventDefault();
    console.dir(event)
    
    let username = event.currentTarget.username.value;
    let password = event.currentTarget.password.value;
}