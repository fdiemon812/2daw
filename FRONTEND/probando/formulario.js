

const validacion={

    nick:true,
    nombre:true,
    password:false,
    dni:false,
    edad:true

}
document.getElementById("dni").addEventListener("change", comprobarDni)
document.getElementById("pass").addEventListener("change", comrobarPass)

function comprobarDni(){

    let regDni=/[0-9]{8}[A-Z]/gmi;
    let dni= document.getElementById("dni").value

    if(regDni.test(dni)){

        document.getElementById("dni").classList.remove("error");
        validacion.dni=true;
    
    
     } else{
        
        document.getElementById("dni").classList.add("error");
        validacion.dni=false;
     };
}



function comrobarPass(){
 //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
 const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
 if(passwordRegex.test(document.getElementById("pass").value)){

    document.getElementById("pass").classList.remove("error");
    validacion.password=true;


 } else{
    
    document.getElementById("pass").classList.add("error");
    validacion.password=false;
 };
}




document.getElementById("envio").addEventListener("click", addUsuario);


function addUsuario(ev){

    ev.preventDefault();

    let result= Object.values(validacion).findIndex(fallo=> fallo == false)
console.log(result)
if( result== -1){
    
    const usuario={
    
       
        nombre:document.getElementById("nombre").value,
        password:document.getElementById("pass").value,
        dni:document.getElementById("dni").value,
        edad:document.getElementById("edad").value,
        fechaAlta: new Date()
    
    }

    console.log("result")

    // if(localStorage.length==0){
    //     localStorage.setItem("contador", "0");
    //     console.log("cre")

    // }else{
    //     console.log("es")

    //     let contador = parseInt(localStorage.getItem("contador"));
    //     contador=contador+1;
    //     localStorage.setItem("contador", contador);
    // }

    let nickNuevo = document.getElementById("nick").value;
    if((Object.keys(localStorage).findIndex(nick => nick==nickNuevo))==-1){

        localStorage.setItem(nickNuevo, JSON.stringify(usuario));


    }else{alert("Usuario ya existe.")}


}





}

document.getElementById("consultar").addEventListener("click", listarDatosUsuario)
function listarDatosUsuario(ev){

    ev.preventDefault();
    let usuarioObjeto= JSON.parse(localStorage.getItem(document.getElementById("nick").value))
    
    let tabla=  '<table border="1"><tr><td>Nick</td><td></td></tr>'
    +'<tr><td>Nombre</td><td>'+usuarioObjeto.nombre+'</td></tr>'
    +'<tr><td>Nombre</td><td>'+usuarioObjeto.edad+'</td></tr>'
    +'<tr><td>Nombre</td><td>'+usuarioObjeto.password+'</td></tr>'
    +'<tr><td>Nombre</td><td>'+usuarioObjeto.fechaAlta+'</td></tr></table>'

    document.getElementsByTagName("form")[0].insertAdjacentHTML("afterend", tabla)



}

