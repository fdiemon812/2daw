const peticion = new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/posts');
peticion.send();
peticion.addEventListener('load', function() {
    if (peticion.status===200) {
        let articulos=JSON.parse(peticion.responseText);  // Convertirmos los datos JSON a un objeto


        let tabla= document.getElementById("tabla");
        for(i=0;i<articulos.length;i++){



            let fila= '<tr><td>'+articulos[i].autor + '</td><td>'+articulos[i].titulo+'</td><td>'+
            articulos[i].titulo+'</td></tr>'
            tabla.insertRow().innerHTML = fila;
            



        }





        
    } else {
        alert("Error en la lectura de datos");
    }
})


const peticion2 = new XMLHttpRequest();
peticion2.open('GET', 'http://localhost:3000/profile');
peticion2.send();
peticion2.addEventListener('load', function() {
    if (peticion2.status===200) {
        let autores=JSON.parse(peticion2.responseText);  // Convertirmos los datos JSON a un objeto


        let select= document.querySelector("select");
        for(i=0;i<autores.length;i++){

           let option= select.createElement("option")
           option.innerHTML= autores[i].name;

           // let fila = '<option value="'+autores[i].name+'">'+autores[i].name+'</option>';


            
            



        }





        
    } else {
        alert("Error en la lectura de datos");
    }
})


