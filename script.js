
const elements = {
     inputEmail: document.getElementById(`input-email`),
     inputSenha: document.getElementById(`input-senha`),
     formLogin: document.getElementById(`form-login`),
     emailError: document.getElementById(`email-error`),
     senhaError: document.getElementById(`senha-error`),
    }

    function showEmailError(msg) {
        elements.emailError.textContent = msg;
    }

    function showSenhaError(msg) {
        elements.senhaError.textContent = msg;
    }

    

elements.formLogin.addEventListener(`submit`, function(event) {
    
    let emailLength = elements.inputEmail.value.length
    let senhaLength = elements.inputSenha.value.length

    showEmailError(``);
    //emailError.textContent = ``;
    showSenhaError(``);
    //senhaError.textContent = ``;

    if(!emailLength) {
        showEmailError("Email é um campo obrigatório!")
       // emailError.textContent = "Email é um campo obrigatório!"
        event.preventDefault();
    }
    
    if(!senhaLength) {
        showSenhaError("Senha é um campo obrigatório!")
     //senhaError.textContent = "Senha é um campo obrigatório!"
     event.preventDefault();
    }
})

/*formLogin.addEventListener(`submit`, function(event) {

    let emailLength = inputEmail.value.length
    let senhaLength = inputSenha.value.length

    if (!emailLength || !senhaLength) {
        alert("Email e senha precisam ser preenchidas!");
        event.preventDefault();
    }

})*/
