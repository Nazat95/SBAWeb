const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sent = document.querySelector("#sent");
const  error = document.querySelectorAll(".error-text");

function validateForm(){

    let errorsClear = false
    clearErrors();


    if (name.value.length < 1){
        error[0].innerText = "Enter your name";
        errorsClear = true;

    }
    if (!emailValid(email.value)){
        error[1].innerText = "Invalid email";
        errorsClear = true;
    }
    if (message.value.length < 1) {
        error[2].innerText = "Please enter message";
        errorsClear = true;
    }
    if (!errorsClear){
        sent.innerText = "Message Sent"
    }
}
function clearErrors(){
    for (let i = 0; i < error.length; i++){
        error[i].innerText = "";
    }
}
function emailValid(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}