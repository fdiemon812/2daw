document.getElementById("nacionalidad").addEventListener("change", desplegar);



function desplegar(){

console.log("hola caracola")
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
document.getElementById("email").addEventListener("change", compruebaEmail);
document.getElementById("terminos").addEventListener("change", compruebaTerminos);


let formValid = {
    nombre: false,
    apellidos: false,
    dni: false,
    pasaporte: false, 
    email: false,
    terminos: false
  

}