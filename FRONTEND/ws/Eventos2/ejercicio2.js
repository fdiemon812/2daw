
let borrar= document.getElementById("borrar");
let boton= document.getElementById("boton");
boton.addEventListener("click", addEmpleado);
borrar.addEventListener("click", delEmpleado);

function addEmpleado(){

    let apellido=document.getElementById("apellidos").value;
    let nombre=document.getElementById("nombre").value;
    let dni= document.getElementById("dni").value

    let tabla= document.getElementById("tab");


    let fiNueva =document.createElement("tr");


    let idEmpleado = document.createElement("td")
    let nombre2= document.createElement("td");
    let dni2= document.createElement("td");
    let apellido2= document.createElement("td");

    
    let numeroEmpleado= tabla.getElementsByTagName("tr").length


    nombre2.innerHTML = nombre;
    apellido2.innerHTML = apellido;
    dni2.innerHTML = dni;
    idEmpleado.innerHTML = numeroEmpleado;

    let comprobador=0;
    for(i =0; i<numeroEmpleado;i++){
        

        if(tabla.getElementsByTagName("tr")[i].querySelector("td:nth-child(2)").innerText == dni ){

            comprobador=comprobador+1;
        }
    }
    
    if(comprobador==0){

        
        fiNueva.appendChild(idEmpleado);
        fiNueva.appendChild(dni2);
        fiNueva.appendChild(nombre2);
        fiNueva.appendChild(apellido2);
    
        tabla.appendChild(fiNueva)
        
    
        let cabecera= document.querySelector("p:first-of-type")
    
        cabecera.innerHTML= "NUMERO TOTAL DE EMPLEADOS:  "+numeroEmpleado;
        

    }else{
        alert("El dni ya existe")
    }





}


function delEmpleado(){

    let dniABorrar= document.getElementById("dni").value
    let numEmpleados = document.getElementById("tab").getElementsByTagName("tr").length
    let filas=document.getElementById("tab").getElementsByTagName("tr");

    for(i=0;i<numEmpleados;i++){

        let columna= (filas[i].querySelector("td:nth-child(2)")).innerText

        if(columna == dniABorrar){

            (document.getElementById("tab")).deleteRow(i)

        }



    }
}