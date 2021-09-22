let boton= document.getElementById("enlace");
boton.addEventListener("click", desplegar);

function desplegar(){

let textoAdicional= document.getElementById("adicional");
textoAdicional.classList.replace("oculto", "visible");

boton.classList.add("oculto")

}