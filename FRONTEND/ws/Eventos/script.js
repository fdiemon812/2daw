

let caja = document.getElementById("box");
let input= document.getElementsByTagName("input")[0];

caja.addEventListener("mousedown", alerta);
caja.addEventListener("mouseup", ()=>{console.log("Acabas de soltar el boton")});



caja.addEventListener("mouseover", pintaVerde);
caja.addEventListener("mouseout", ()=>{document.getElementById("box").classList.replace("verde", "box")});

input.addEventListener("keydown", ()=>{console.log("Has pulsado una tecla")});
input.addEventListener("keyup", ()=>{console.log("Acabas de soltar la tecla")});

document.addEventListener("keydown", teclaPulsada);


function alerta(){
    
    
    console.log("Has pulsado la caja");
    
}


function pintaVerde(){
    
    
    document.getElementById("box").classList.replace("box", "verde");
    
}


function teclaPulsada(ev){

   let tecla = ev.key;
   console.log("La tecla es "+ tecla);

}


