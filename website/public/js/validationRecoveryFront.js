window.addEventListener("load", function(){

    let form= document.querySelector("form.form-container"); //CAPTURO EL FORMULARIO COMPLETO
        
    let inputEmail= document.querySelector("input#email"); //CAPTURO EL INPUT EMAIL
    
    let errorsListEmail= document.querySelector("#errorsListEmail");
        
    let errorCounter="";
    
    form.addEventListener("keypress", function(){
        var hasErrors= false; //COMIENZA SIN ERRORES

        errorsListEmail.innerHTML="";

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