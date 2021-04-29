window.addEventListener("load", function(){

    let inputEmail= document.querySelector("input#email"); //CAPTURO EL INPUT EMAIL
    let inputPassword= document.querySelector("input#password"); //CAPTURO EL INPUT PASSWORD
    let formFull= document.querySelector("form.form-container"); //CAPTURO EL FORMULARIO COMPLETO
    
    //PARA EL EMAIL
    inputEmail.addEventListener("blur", function(){ //LISTENER EN EL FORMULARIO CUANDO SALGO DEL INPUT (BLUR)

        const erroresEmail = [];
        
        if (inputEmail.value=="") {
            erroresEmail.push ("El campo de email no puede estar vacío")
        } else if (inputEmail.value<3) {
            erroresEmail.push ("El campo de email debe contener más de 2 caracteres");
        } else if (!inputEmail.value.includes("@")) {
            erroresEmail.push ("El email debe contener @");
        } else if (!inputEmail.value.includes(".")) {
            erroresEmail.push ("El email debe contener .");
        } else if (inputEmail.value.includes("!")
        ) {
            erroresEmail.push ("El email no admite caracteres especiales");
        }

        if (erroresEmail.length>0) {
           

            let errorFrontEmail = document.querySelector("#errorFrontEmail"); //CAPTURO EL ID DE ERROR
            //for (let i=0; i< length.erroresEmail; i++) {
            errorFrontEmail.innerHTML += "<li>" + erroresEmail + "</li>";
            //}
            }
    });

    //PARA EL PASSWORD
   inputPassword.addEventListener("blur", function(){ //LISTENER EN EL FORMULARIO CUANDO SALGO DEL INPUT (BLUR)

        const erroresPassword = [];
        
        if (inputPassword.value=="") {
            erroresPassword.push ("El campo de la contraseña no puede estar vacío")
        } else if (inputPassword.value<5) {
            erroresPassword.push ("La contraseña debe contener como mínimo 5 caracteres");
        }

        if (erroresPassword.length>0) {
           

            let errorFrontPassword = document.querySelector("#errorFrontPassword"); //CAPTURO EL ID DE ERROR
            //for (let i=0; i< length.erroresPassword; i++) {
            errorFrontPassword.innerHTML += "<li>" + erroresPassword + "</li>";
            //}
            }
    });

    //PREVENT DEFAULT PARA EL FORMULARIO COMPLETO
    formFull.addEventListener("submit", function(e){ //LISTENER EN EL FORMULARIO CUANDO SALGO DEL INPUT (BLUR)
        console.log(erroresPassword)
        
        if (erroresPassword.length>0) {
           e.preventDefault("submit");
        }
            
    });



})