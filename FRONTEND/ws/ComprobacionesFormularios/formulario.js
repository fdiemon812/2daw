document.getElementById("nacionalidad").addEventListener("change", desplegar);



function desplegar(){

let valor= document.getElementById("nacionalidad").value
document.getElementById("addni").classList.add("oculto")
document.getElementById("addpasaporte").classList.add("oculto")

if(valor==1 || valor==2){
    document.getElementById("addni").classList.remove("oculto")
}else if(valor==3){
    document.getElementById("addpasaporte").classList.remove("oculto")

}

}


document.getElementById("nombre").addEventListener("change", compruebaNombre);
document.getElementById("apellidos").addEventListener("change", compruebaApellido);
document.getElementById("dni").addEventListener("change", compruebaDni);
document.getElementById("pasaporte").addEventListener("change", compruebaPasaporte);
document.getElementById("correo").addEventListener("change", compruebaEmail);
document.getElementById("terminos").addEventListener("change", compruebaTerminos);

document.getElementById("enviando").addEventListener("click", comprobarCampos);


let formValid = {
    nombre: false,
    apellidos: false,
    dniPasaporte: false,
    email: false,
    terminos: false
  

}

function comprobarCampos(ev){

    


    let result= Object.values(formValid).findIndex(value=> value==false)
    
    if(result!=-1){
        
        ev.preventDefault();

        alert("Hay errores en el formulario")
        
    }



}

function compruebaNombre(){
    console.log("entra")

    let name = document.getElementById("nombre").value;


    let nombreCorrecto =/^[a-zñáéíóú ]+$/gi;




    if(!nombreCorrecto.test(name)){
        

        document.getElementById("nombre").classList.add("error")
        formValid.nombre=false;

    }else{
        
        document.getElementById("nombre").classList.remove("error")
        formValid.nombre=true;

    }



}

function compruebaApellido(){

    let apellido = document.getElementById("apellidos").value;


    let nombreCorrecto =/^[a-zñáéíóú ]+$/gi;




    if(!nombreCorrecto.test(apellido)){
        

        document.getElementById("apellidos").classList.add("error")
        formValid.apellidos=false;

    }else{
        
        document.getElementById("apellidos").classList.remove("error")
        formValid.apellidos=true;

    }



}


function compruebaEmail(){


    let email = document.getElementById("correo").value;


    let nombreCorrecto =/^.*[@]{1}.*$/gi;




    if(!nombreCorrecto.test(email)){
        

        document.getElementById("correo").classList.add("error")
        formValid.email=false;


    }else{
        
        document.getElementById("correo").classList.remove("error")
        formValid.email=true;

    }




}

function compruebaDni(){


    let dni = document.getElementById("dni").value;


    let nombreCorrecto =/^[0-9]{8}[a-z]$/gi;




    if(!nombreCorrecto.test(dni)){
        

        document.getElementById("dni").classList.add("error")
        formValid.dniPasaporte=false;

    }else{
        
        document.getElementById("dni").classList.remove("error")
        formValid.dniPasaporte=true;

    }

}



function compruebaPasaporte(){


    let pasaporte = document.getElementById("pasaporte").value;


    let nombreCorrecto =/^[0-9]{8}[a-z]$/gi;




    if(!nombreCorrecto.test(pasaporte)){
        

        document.getElementById("pasaporte").classList.add("error")
        formValid.dniPasaporte=false;

    }else{
        
        document.getElementById("pasaporte").classList.remove("error")
        formValid.dniPasaporte=true;

    }

}

function compruebaTerminos(){

    formValid.terminos=document.getElementById("terminos").checked;

}