window.addEventListener("load", function(){

    let form= document.querySelector("form.form-container"); //CAPTURO EL FORMULARIO COMPLETO
     
    let inputName= document.querySelector("input#first_name"); //CAPTURO EL INPUT NAME
    let inputEmail= document.querySelector("input#email"); //CAPTURO EL INPUT EMAIL
    let inputPassword= document.querySelector("input#password"); //CAPTURO EL INPUT PASSWORD
    let inputImage= document.querySelector("input#avatar"); //CAPTURO EL INPUT IMAGE

    let errorsListName= document.querySelector("#errorsListName");
    let errorsListEmail= document.querySelector("#errorsListEmail");
    let errorsListPassword= document.querySelector("#errorsListPassword");
    let errorsListImage= document.querySelector("#errorsListImage");
    
    let errorCounter="";
    
    form.addEventListener("keypress", function(){

        errorsListName.innerHTML="";
        errorsListEmail.innerHTML="";
        errorsListPassword.innerHTML="";
        errorsListImage.innerHTML="";

        if (inputName.value=="") { //CHANGE PARA EL NAME
            hasErrors= true;   
            errorsListName.innerHTML += "<li> El campo Nombre no puede estar vacío </li>";
            }
        else if (inputName.value.length<2) {
            hasErrors= true;   
            errorsListName.innerHTML += "<li> El campo Nombre debe tener como mínimo 2 caracteres</li>";
            }
        if (inputEmail.value=="") { //CHANGE PARA EL EMAIL
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
        if (inputPassword.value=="") { //CHANGE PARA EL PASSWORD
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> El campo de contraseña no puede estar vacío </li>";
            }
        else if (inputPassword.value.length<6) {
            hasErrors= true;
            errorsListPassword.innerHTML += "<li> La contraseña debe tener como mínimo 8 caracteres </li>";
            }
        if (inputImage.value=="") { //CHANGE PARA EL IMAGE
            hasErrors= true;
            errorsListImage.innerHTML += "<li> Debes ingresar una imagen </li>";
            }
        /*else if(inputImage.value){
            hasErrors=true;

        }   */
    })

    form.addEventListener("submit", function(e){

        if(errorCounter=="sin errores") { //SI NO HAY ERRORES SE EJECUTA EL SUBMIT
            this.submit(); 
        } else {
            e.preventDefault();
        }
    });
})