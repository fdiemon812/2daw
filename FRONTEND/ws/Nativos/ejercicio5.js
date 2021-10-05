document.getElementById("resolucion").addEventListener("click", resolucion)

function resolucion(){

    
alert("El alto de tu pantalla es " + window.screen.height+ " y el ancho es " + window.screen.width + "   Esto nos puede servir a la hora de ajustar nuestras webs/apps al tamaño adecuado")


}


document.getElementById("orientacion").addEventListener("click", orientacion)

function orientacion(){

   alert("Podemos ver con el comando Screen.orientation el angulo en el que se posiciona nuestra pantalla y poder ir ajustando nuestras webs. En este caso el angulo actual es: "+ window.screen.orientation.angle+"grados")

    alert("Ambas nos sirven para ajustar nuestras apps/webs a cualquier dispositivo ")
    
}