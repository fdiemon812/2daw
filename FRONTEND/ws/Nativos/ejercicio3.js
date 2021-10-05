document.getElementById("location").addEventListener("click", locationPRueba)

function locationPRueba(){

alert("El location.protocol nos devuelve: " +location.protocol)
alert("El location.port = " +location.port)
alert("El location.href = " +location.href)

alert("El location.replace(webCualquiera) nos va a llevar a la web de amazon justo ahora")
location.replace("http://www.amazon.es")

}


document.getElementById("recarga").addEventListener("click", recarga)

function recarga(){


    location.reload(true);
    
}