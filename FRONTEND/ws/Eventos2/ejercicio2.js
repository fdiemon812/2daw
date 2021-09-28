

let boton= document.getElementById("boton");
boton.addEventListener("click", addEmpleado);


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


    fiNueva.appendChild(idEmpleado);
    fiNueva.appendChild(dni2);
    fiNueva.appendChild(nombre2);
    fiNueva.appendChild(apellido2);



    tabla.appendChild(fiNueva)


    let cabecera= document.querySelector("p:first-of-type")

    cabecera.innerHTML= "NUMERO TOTAL DE EMPLEADOS:  "+numeroEmpleado;

}