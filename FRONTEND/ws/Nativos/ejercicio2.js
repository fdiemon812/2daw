document.getElementById("arrays").addEventListener("click", comprobar)

function comprobar(){

let anclas= document.links.length
let formularios= document.forms.length
let imagenes= document.images.length

alert("Nuestro formulario contiene "+anclas+" links")
alert("Nuestro formulario contiene "+formularios+" formularios")
alert("Nuestro formulario contiene "+imagenes+" imagenes")

}