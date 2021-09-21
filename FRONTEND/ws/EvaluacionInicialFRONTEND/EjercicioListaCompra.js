

document.getElementById("aplicar").addEventListener("click", addElemento);


function addElemento(){

let pos = parseInt(document.getElementById("posicion").value)
let elemento= document.getElementById("nombre").value



let ul= document.getElementById("lista");
let nuevoE = document.createElement("li");
let liPosicion= document.getElementsByTagName("li")[pos-1];


nuevoE.innerHTML = elemento;
ul.insertBefore(nuevoE, liPosicion);





}

document.getElementById("borrar").addEventListener("click", delElemento);

function delElemento(){


let pos = parseInt(document.getElementById("posicion").value);

let lista= document.getElementById("lista");

let elemenotABorrar = document.getElementsByTagName("li")[pos-1];


lista.removeChild(elemenotABorrar);

}

