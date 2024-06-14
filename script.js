const form = document.querySelector("#form")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("password")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Digite seu email antes de prosseguir!");
        return;
    }
    form.submit();
})

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}
