window.addEventListener("load", function(){

    let form= document.querySelector("form.form-container"); //CAPTURO EL FORMULARIO COMPLETO
        
    let inputEmail= document.querySelector("input#email"); //CAPTURO EL INPUT EMAIL

    let errorsListEmail= document.querySelector("#errorsListEmail"); 
    
    form.addEventListener("submit", function(e){

        let hasErrors= false; //COMIENZA SIN ERRORES
        e.preventDefault(); 

        errorsListEmail.innerHTML="";

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

        if(!hasErrors) { //SI NO HAY ERRORES SE EJECUTA EL SUBMIT
            this.submit(); 
        }
    });

    form.addEventListener("keypress", function(){

        errorsListEmail.innerHTML="";

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
    })
})