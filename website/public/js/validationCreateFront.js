window.addEventListener("load", function(){

    let form= document.querySelector("form.m-auto col-md-7"); //CAPTURO EL FORMULARIO COMPLETO
     
    let inputImage= document.querySelector("input.form-control m-auto"); //CAPTURO EL INPUT IMAGE
    let inputName= document.querySelector("input#name"); //CAPTURO EL INPUT NAME
    let textareaDescription= document.querySelector("textarea#description"); //CAPTURO EL INPUT DESCRIPTION 
    let textareaFullDescription= document.querySelector("textarea#fullDescription"); //CAPTURO EL INPUT FULLDESCRIPTION
   

    let errorsListImage= document.querySelector("#errorsListImage");
    let errorsListName= document.querySelector("#errorsListName");
    let errorsListDescription= document.querySelector("#errorsListDescription");
    let errorsListFullDescription= document.querySelector("#errorsListFullDescription");
    
    
    
    form.addEventListener("submit", function(e){

        let hasErrors= false; //COMIENZA SIN ERRORES
        e.preventDefault(); 

        errorsListImage.innerHTML="";
        errorsListName.innerHTML="";
        errorsListDescription.innerHTML="";
        errorsListFullDescription.innerHTML="";

        if (inputImage.value=="") {
            hasErrors= true;
            errorsListImage.innerHTML += "<li> Debes ingresar una imagen </li>";
            }
        if (inputName.value=="") {
            hasErrors= true;   
            errorsListName.innerHTML += "<li> El campo Título no puede estar vacío </li>";
            }
        if (inputName.value.length<5) {
            hasErrors= true;   
            errorsListName.innerHTML += "<li> El campo Título debe tener como mínimo 5 caracteres</li>";
            }
        if (textareaDescription.value=="") {
            hasErrors= true;
            errorsListDescription.innerHTML += "<li> El campo Subtítulo no puede estar vacío </li>";
            }
        if (textareaDescription.value.length<3) {
            hasErrors= true;
            errorsListDescription.innerHTML += "<li> El campo Subtítulo debe tener como mínimo 3 caracteres </li>";
            }
        if (textareaFullDescription.value=="") {
            hasErrors= true;
            errorsListFullDescription.innerHTML += "<li> La descripción no puede estar vacía </li>";
            }
        if (textareaFullDescription.value.length<20) {
            hasErrors= true;
            errorsListFullDescription.innerHTML += "<li> La descripción debe tener como mínimo 20 caracteres </li>";
            }

        if(!hasErrors) { //SI NO HAY ERRORES SE EJECUTA EL SUBMIT
            this.submit(); 
        }
    });

    form.addEventListener("keypress", function(){

        errorsListImage.innerHTML="";
        errorsListName.innerHTML="";
        errorsListDescription.innerHTML="";
        errorsListFullDescription.innerHTML="";
    
        if (inputImage.value=="") {
            hasErrors= true;
            errorsListImage.innerHTML += "<li> Debes ingresar una imagen </li>";
            }
        if (inputName.value=="") {
            hasErrors= true;   
            errorsListName.innerHTML += "<li> El campo Título no puede estar vacío </li>";
            }
        if (inputName.value.length<5) {
            hasErrors= true;   
            errorsListName.innerHTML += "<li> El campo Título debe tener como mínimo 5 caracteres</li>";
            }
        if (textareaDescription.value=="") {
            hasErrors= true;
            errorsListDescription.innerHTML += "<li> El campo Subtítulo no puede estar vacío </li>";
            }
        if (textareaDescription.value.length<3) {
            hasErrors= true;
            errorsListDescription.innerHTML += "<li> El campo Subtítulo debe tener como mínimo 3 caracteres </li>";
            }
        if (textareaFullDescription.value=="") {
            hasErrors= true;
            errorsListFullDescription.innerHTML += "<li> La descripción no puede estar vacía </li>";
            }
        if (textareaFullDescription.value.length<20) {
            hasErrors= true;
            errorsListFullDescription.innerHTML += "<li> La descripción debe tener como mínimo 20 caracteres </li>";
            }
    })
})