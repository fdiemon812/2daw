

let enlaces = document.getElementsByTagName("a");

alert("El numero de enlaces es " + enlaces.length);


let enlacePenultimo = document.querySelector("p:last-of-type a:nth-last-child(2)")
alert("El penúltimo enlace es: " + enlacePenultimo.getAttribute("tppabs"))



let enlacePrueba = document.querySelectorAll('a[tppabs="http://prueba/"]');


alert("Numero de enlaces que enlazan a http://prueba/ es : " + enlacePrueba.length);

let enlacesTercerParrafo = document.querySelectorAll("p:nth-child(3) a[tppabs]")


alert("Número de enlaces del tercer párrafo: "+ enlacesTercerParrafo.length )