window.addEventListener("load", function(){
    let loginForm = document.querySelector("form"); //CAPTURO EL FORMULARIO

    const errorFrontEmail = document.querySelector("#errorFrontEmail"); //CAPTURO EL ID DE ERROR
    const errorFrontPassword = document.querySelector("#errorFrontPassword"); //CAPTURO EL ID DE ERROR

    loginForm.addEventListener("blur", function(e){ //LISTENER EN EL FORMULARIO CUANDO SALGO DEL INPUT (BLUR)
        e.prenvetDefault(); 

        const inputEmail= this.querySelector("#email");
        const inputPassword= this.querySelector("#password");

        errorFrontEmail = "";
        errorFrontPassword = "";

        if (inputEmail=="") {
            errorFrontEmail.innerHTML += "<li>El email no puede estar vacío</li>"
        };

        if (inputPassword=="") {
            errorFrontPassword.innerHTML += "<li>El password no puede estar vacío</li>"
        };

        
    });
})