window.addEventListener("load", function(){

    let form= document.querySelector("form.form-container"); //CAPTURO EL FORMULARIO COMPLETO
        
    let inputEmail= document.querySelector("input#email"); //CAPTURO EL INPUT EMAIL
    let inputPassword= document.querySelector("input#password"); //CAPTURO EL INPUT PASSWORD

    let errorsListEmail= document.querySelector("#errorsListEmail");
    let errorsListPassword= document.querySelector("#errorsListPassword");
    
    form.addEventListener("submit", function(e){

        let hasErrors= false; //COMIENZA SIN ERRORES
        e.preventDefault(); 

        errorsListEmail.innerHTML="";
        errorsListPassword.innerHTML="";

        if (inputEmail.value=="") {
            hasErrors= true;   
            errorsListEmail.innerHTML += "<li> El campo de email no puede estar vacío </li>";
            }
        if (inputEmail.value<8) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email no es válido </li>";
            }
        if (!inputEmail.value.includes("@")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener @ </li>";
            }
        if (!inputEmail.value.includes(".")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener . </li>";
            }
        if (inputEmail.value.includes("!")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener caracteres válidos </li>";
            }
        if (inputPassword.value=="") {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> El campo de contraseña no puede estar vacío </li>";
            }
        if (inputPassword.value<5) {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> La contraseña debe tener como mínimo 5 caracteres </li>";
            }

        if(!hasErrors) { //SI NO HAY ERRORES SE EJECUTA EL SUBMIT
            this.submit(); 
        }
    });

    form.addEventListener("keypress", function(){

        errorsListEmail.innerHTML="";
        errorsListPassword.innerHTML="";

        if (inputEmail.value=="") {
            hasErrors= true;   
            errorsListEmail.innerHTML += "<li> El campo de email no puede estar vacío </li>";
            }
        if (inputEmail.value<8) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email no es válido </li>";
            }
        if (!inputEmail.value.includes("@")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener @ </li>";
            }
        if (!inputEmail.value.includes(".")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener . </li>";
            }
        if (inputEmail.value.includes("!")) {
            hasErrors= true;
            errorsListEmail.innerHTML += "<li> El email debe contener caracteres válidos </li>";
            }
        if (inputPassword.value=="") {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> El campo de contraseña no puede estar vacío </li>";
            }
        if (inputPassword.value<5) {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> La contraseña debe tener como mínimo 5 caracteres </li>";
            }
    })
})
    
    