document.getElementById("bateria").addEventListener("click", bateriaC)

function bateriaC(){

    let navegador=window.navigator.appCodeName
alert("El window.navigator.appCodeName nos devuelve: " + navegador)


}


document.getElementById("recarga").addEventListener("click", recarga)

function recarga(){

    let idioma= window.navigator.language

    alert("El idioma es : " + idioma)
    
}