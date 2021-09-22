
document.querySelector("input:last-of-type").addEventListener("click", colorear)

function colorear(){

    let fila= parseInt(document.querySelector("div input:first-of-type").value)
    let columna= parseInt(document.querySelector("div input:nth-child(2)").value)

    let casilla=(document.getElementsByTagName("tr")[fila-1]).getElementsByTagName("td")[columna-1];
    let casillAntigua=document.getElementsByClassName("rojo")[0];
  
    if(casillAntigua!=null){

    casillAntigua.classList.remove("rojo");
    }
    
    casilla.classList.add("rojo");
}