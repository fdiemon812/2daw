// Insertar nuevos empleados en la tabla. Deberá crear la función javascript
// correspondiente que permita insertar nuevos empleados. En el caso de insertar
// un nuevo empleado deberá actualizarse el número total de empleados. En el
// caso de ya existir el empleado deberá mostrarse una alerta indicando que ya
// existe el empleado. El DNI será el identificador del empleado.
let botonAdd = document.querySelector('#add');
botonAdd.addEventListener("click", addEmpleado);

function addEmpleado(){

    let numero = prompt("Número de empleado: ");
    let nombre = prompt("Nombre: ");
    let apellidos = prompt("Apellidos: ");
    let dni = prompt("Introduzca DNI: ");


    let contadorEmple = 0;

    let tabla = document.querySelector('table');
    let filas = tabla.getElementsByTagName("tr");

    //crompuebo si el dni ya existe en la tabla
    for( let i=0; i<filas.length;i++){

        if (filas[i].value == dni){
            alert("Este empleado ya existe.")
            dni = prompt("Introduzca DNI: ")
        }
       
    } 
    let datos = []
    datos.push(numero)
    datos.push(dni) 
    datos.push(nombre)
    datos.push(apellidos)
        

    let fila = document.createElement("tr");

    //creo tantas celdas como campos hay en el array de datos
    for (a=0; a<datos.length; a++){
        
        let celda = document.createElement("td");

        //añado a cada celda un elemento del array
        celda.appendChild(document.createTextNode(datos[a])); 

        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
    contadorEmple+=1;

    //modifico el valor del total de empleados
    let actualizar = document.getElementById("cantEmple")
    actualizar.innerHTML = "Número total de empleados: "+contadorEmple
  
}


// Borrar un empleado de la tabla. Deberá crear la función javascript
// correspondiente que permita borrar un empleado. Para borrar un empleado
// deberá introducirse el DNI del empleado que se desea borrar. En el caso de
// borrar un empleado deberá actualizarse el número total de empleados. En el
// caso de que no exista el empleado deberá mostrarse una alerta.
let botonDel = document.querySelector('#del');
botonDel.addEventListener("click", borrarEmpleado)

function borrarEmpleado(){
    let dniBuscar = prompt("Introduzca el DNI del empleado que desea borrar: ");


}


// Modificar un empleado de la tabla. Deberá crear la función javascript
// correspondiente. En el caso de que no exista el empleado a modificar deberá
// mostrar una alerta indicando que el empleado a modificar no existe. 
let botonMod = document.querySelector('#mod');
botonMod.addEventListener("click", modificarEmpleado);

function modificarEmpleado() {

  }