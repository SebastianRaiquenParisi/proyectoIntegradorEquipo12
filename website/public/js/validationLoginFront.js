window.addEventListener("load", function(){

    let form= document.querySelector("form.form-container"); //CAPTURO EL FORMULARIO COMPLETO
        
    let inputEmail= document.querySelector("input#email"); //CAPTURO EL INPUT EMAIL
    let inputPassword= document.querySelector("input#password"); //CAPTURO EL INPUT PASSWORD

    let errorsListEmail= document.querySelector("#errorsListEmail");
    let errorsListPassword= document.querySelector("#errorsListPassword");
    
    let errorCounter="";
    
    form.addEventListener("keypress", function(){
        var hasErrors= false; //COMIENZA SIN ERRORES

        errorsListEmail.innerHTML="";
        errorsListPassword.innerHTML="";

        if (inputEmail.value=="") {
            hasErrors= true;   
            errorsListEmail.innerHTML += "<li> El campo de email no puede estar vacío </li>";
            }
        else if (inputEmail.value.length<8) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email no es válido </li>";
            }
        else if (!inputEmail.value.includes("@")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener @ </li>";
            }
        else if (!inputEmail.value.includes(".")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener . </li>";
            }
        else if (inputEmail.value.includes("!")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener caracteres válidos </li>";
        }
        if (inputPassword.value=="") {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> El campo de contraseña no puede estar vacío </li>";
            }
        else if (inputPassword.value.length<3) {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> La contraseña debe tener como mínimo 6 caracteres </li>";
            }
        
        if(hasErrors==false) {
            errorCounter="sin errores";
        }
    })

    form.addEventListener("submit", function(e){

        if(errorCounter=="sin errores") { //SI NO HAY ERRORES SE EJECUTA EL SUBMIT
            this.submit(); 
        } else {
            e.preventDefault();
        }
    });

})


    
    