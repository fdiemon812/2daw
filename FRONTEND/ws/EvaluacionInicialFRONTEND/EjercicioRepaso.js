let aplicar= document.getElementById("boton");
aplicar.addEventListener("click", aplicarCambios);


function aplicarCambios(){
 let equipo = document.getElementById("equipo").value;
 let puntos = document.getElementById("puntos").value;
 let posicion = document.getElementById("posicion").value;


let fila= document.getElementsByTagName("tr")[posicion];
let col1 = fila.getElementsByTagName("td")[1];
let col2 = fila.getElementsByTagName("td")[2];
col1.innerHTML = equipo;
col2.innerHTML = puntos;

}