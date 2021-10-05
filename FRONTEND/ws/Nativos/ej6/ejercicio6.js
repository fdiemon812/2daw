document.getElementById("adelante").addEventListener("click", avanza)
document.getElementById("atras").addEventListener("click", atras)

function atras(){
history.back();


}


function avanza(){
    history.forward();
}