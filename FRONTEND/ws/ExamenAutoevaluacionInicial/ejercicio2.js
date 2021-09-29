
let borrar= document.getElementById("borrar");
let boton= document.getElementById("boton");
let modificar=document.getElementById("modificar");

boton.addEventListener("click", addEmpleado);
borrar.addEventListener("click", delEmpleado);
modificar.addEventListener("click", updateEmpleado);


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
    let i=0;
    while(i<numeroEmpleado && comprobador==0){
        

        if(tabla.getElementsByTagName("tr")[i].querySelector("td:nth-child(2)").innerText == dni ){

            comprobador=comprobador+1;
        }
        i++;
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
    let boo=0;
    let i=0;
    while(i<numEmpleados && boo==0){

        let columna= (filas[i].querySelector("td:nth-child(2)")).innerText

        if(columna == dniABorrar){

            (document.getElementById("tab")).deleteRow(i)

           let numEmpleados2 = (document.getElementById("tab").getElementsByTagName("tr").length - 1)
            let cab= document.querySelector("p:first-of-type")
            boo=1;
    
        cab.innerHTML= "NUMERO TOTAL DE EMPLEADOS:  "+numEmpleados2;

            
        for(j=i;j<numEmpleados;j++){

            document.getElementById("tab").getElementsByTagName("tr")[j].querySelector("td:nth-child(1)").innerHTML = j;


            }
    
        }

            i++;
    
    
    }
    if(boo==0){

            alert("No existe ese empleado")

    }
            
            


        
}

function updateEmpleado(){

    let apellido=document.getElementById("apellidos").value;
    let nombre=document.getElementById("nombre").value;
    let dni= document.getElementById("dni").value;
    let cantidadFilas=document.getElementById("tab").getElementsByTagName("tr").length;
    

    let i = 0;
    let comprobador= true;

    while(i<cantidadFilas && comprobador){

        if(document.getElementById("tab").getElementsByTagName("tr")[i].querySelector("td:nth-child(2)").innerText == dni){

            document.getElementById("tab").getElementsByTagName("tr")[i].querySelector("td:nth-child(3)").innerHTML = nombre
            document.getElementById("tab").getElementsByTagName("tr")[i].querySelector("td:nth-child(4)").innerHTML = apellido

            comprobador= false;
        }

        i++;

    }

    if(comprobador){
            alert("no existe ese DNI");
    }



}


