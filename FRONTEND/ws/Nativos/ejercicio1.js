

document.getElementById("mover").addEventListener("click", moverVentana);
document.getElementById("redimensionar").addEventListener("click", redimensionarVentana);
document.getElementById("add").addEventListener("click", addVentana);


function redimensionarVentana(){
window.resizeTo(100, 200);

}


function addVentana(){

window.open("http://127.0.0.1:5500/ws/Nativos/ejercicio1.html","prueba", "with=100, height=100" )

}


function moverVentana(){
    
    window.moveBy(100,100)
}