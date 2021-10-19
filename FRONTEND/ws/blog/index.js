//COMPROBACIONES FORMULARIO

document.getElementById("nombre").addEventListener("change", comprobarNombre)
document.getElementById("fecha").addEventListener("change", comprobarFecha)
document.getElementById("tlf").addEventListener("change", comprobarTelefono)
document.getElementById("mail").addEventListener("change", compruebaEmail)




let formularioValido ={

    nombre: false,
    fecha: false,
    tlf: false,
    mail: false

}

function comprobarNombre(){

    let nombreCorrecto =/^[a-zñáéíóú ]+$/gi;
    let nombre= document.getElementById("nombre").value;


    if(!nombreCorrecto.test(nombre)){

        document.getElementById("nombre").classList.remove("bien")
        document.getElementById("nombre").classList.add("error")

        formularioValido.nombre= false;

    }else{

        document.getElementById("nombre").classList.remove("error")
        document.getElementById("nombre").classList.add("bien")
        formularioValido.nombre= true;

    }


}

function comprobarTelefono(){


    let telefonoCorrecto= /^[0-9]{9}$/g;
    let tlf = document.getElementById("tlf").value


    if(!telefonoCorrecto.test(tlf)){

        document.getElementById("tlf").classList.remove("bien")
        document.getElementById("tlf").classList.add("error")

        formularioValido.tlf= false;

    }else{

        document.getElementById("tlf").classList.remove("error")
        document.getElementById("tlf").classList.add("bien")
        formularioValido.tlf= true;

    }

}


function compruebaEmail(){


    let email = document.getElementById("mail").value;


    let nombreCorrecto =/^.*[@]{1}.*$/gi;




    if(!nombreCorrecto.test(email)){
       
        document.getElementById("mail").classList.remove("bien")
        document.getElementById("mail").classList.add("error")
       
        formularioValido.mail=false;


    }else{
       
        document.getElementById("mail").classList.remove("error")
        document.getElementById("mail").classList.add("bien")
        formularioValido.mail=true;

    }
}


function comprobarFecha(){

    let fecha= document.getElementById("fecha").value
    let fechaCorrecta= new Date(fecha);
    let fechaActual= new Date();


    if(fechaCorrecta>=fechaActual){



        document.getElementById("fecha").classList.remove("bien")
        document.getElementById("fecha").classList.add("error")
       
        formularioValido.fecha=false;


    }else{
       
        document.getElementById("fecha").classList.remove("error")
        document.getElementById("fecha").classList.add("bien")
        formularioValido.fecha=true;

    }
}


document.getElementById("enviar").addEventListener("click", comprobarCampos)

function comprobarCampos(ev){


    let result=Object.values(formularioValido).findIndex(value=> value==false);

    if(result!=-1){
       
        ev.preventDefault();

        alert("Hay errores en el formulario")
       
    }

}