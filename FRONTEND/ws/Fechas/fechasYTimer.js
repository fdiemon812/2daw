
document.getElementById("fecha").addEventListener("change", escribeDateTime);
document.getElementById("hora").addEventListener("change", escribeDateTime);

document.getElementById("mes").addEventListener("change", despliegaCalendario);
document.getElementById("year").addEventListener("change", despliegaCalendario);


document.getElementById("fechaPago").addEventListener("change", calculaRetraso);
document.getElementById("diasRetraso").addEventListener("change", calculaRetraso);

window.setInterval(reloj, 1000);
window.setInterval(alarma, 1000);


function escribeDateTime(){

    let fechaString=document.getElementById("fecha").value
    let fechaDate = new Date(fechaString);
    
    let hora= document.getElementById("hora").value
    let dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    
    let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre" ]

    let dia = fechaDate.getDate();
    let diaSemana= dias[fechaDate.getDay()];
    let mes = fechaDate.getMonth();
    let year= fechaDate.getFullYear();


    let nuevoMensaje= "Hoy es "+ diaSemana+", "+ dia + " de "+ meses[mes] +" del año " + year + 
    ". Son las  " + hora;

    document.getElementById("textoNuevo").innerText = nuevoMensaje

    

}

function despliegaCalendario(){

    let mes = document.getElementById("mes").value;
    let year= document.getElementById("year").value;

    let meses= ["Diciembre","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre" ]
    let dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]

    let fechaNueva = new Date(parseInt(year), parseInt(meses.indexOf(mes)), 1)
    let maximoDias = fechaNueva.getUTCDate();
    let mensaje="";


   for(i=1;i<(maximoDias+1);i++){
    fechaNueva.setDate(i)
    mensaje= mensaje + fechaNueva.getDate() + " ( "+dias[fechaNueva.getDay()] +" )" 

   }

   document.getElementById("calendario").innerText= mensaje;






}


function calculaRetraso(){

let fecha= new Date(document.getElementById("fechaPago").value);
let diasRetraso= parseInt((document.getElementById("diasRetraso").value));

let yearNuevo=parseInt(fecha.getFullYear());
let mesNuevo=parseInt(fecha.getMonth());
let diaNuevo=parseInt(fecha.getDate())+diasRetraso;


let fechaPago= new Date(yearNuevo,(mesNuevo+1),diaNuevo)

document.getElementById("retraso").innerText = "El pago ha sido realizado el día "+ fechaPago.getDate() +" del " + fechaPago.getMonth() + " del año " + fechaPago.getFullYear();

}

function reloj(){
    let fecha = new Date();
    document.getElementById("crono").innerText = "Hoy es " +fecha.getDate().toString() +" - "+fecha.getMonth().toString() +" - "+fecha.getFullYear().toString() +" y son las " + fecha.getHours().toString()+":" + fecha.getMinutes() +":"+ fecha.getSeconds();
}

function alarma(){
    let fecha = new Date();
    document.getElementById("alarma").innerText = fecha.getHours().toString()+":" + fecha.getMinutes() +":"+ fecha.getSeconds();

    let input= document.getElementById("horaAlarma").value

    let horas= parseInt(input[0]+input[1]);
    let minutos = parseInt(input[3]+input[4]);
    
    let alarma = new Date();
    alarma.setHours(horas);
    alarma.setMinutes(minutos);

   
    if(alarma<=fecha){
        
        alert("A currar!!!")
        clearInterval()


    }else{
       
    }

}



