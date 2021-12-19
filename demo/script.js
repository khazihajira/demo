document.write=("hello");
const form = document.getElementById('form');
const form = document.getElementById('username');
const form = document.getElementById('email');
const form = document.getElementById('password');
const form = document.getElementById('password2');

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
    //get values from the inputs
   const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===" "){
        //show error
        //add error class
        setErrorFor(username, "username cannot be blank");
    }else{
        //add success class
        setSuccessFor(username);

    }
}

function setErrorFor(input, message){
    const forControl= input.parentElement; //form-control
    const small= formControl.querySelector('small');
    
    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className='form-control error';

}