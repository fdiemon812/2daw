const peticion = new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/posts');
peticion.send();
peticion.addEventListener('load', function() {

    //EN REALIDAD EL LOAD YA COMPRUEBA SI HA SIDO ENVIADO CORRECTAMENTE, NO HACE FALTA EL IF
    if (peticion.status===200) {
        let articulos=JSON.parse(peticion.responseText);  // Convertirmos los datos JSON a un objeto


        let tabla= document.getElementById("tabla");
        articulos.forEach(articulo => {
            
       
            let enlace= "'post.html?id=" +articulo.id+"'"

            let fila= '<tr><td>'+articulo.autor + '</td><td>'+articulo.titulo+'</td><td>'+
            articulo.articulo+'</td><td><button onclick="location.href='+enlace+'">Ver</button><button id="'+articulo.id+'">Borrar</button></td></tr>'
            tabla.insertRow().innerHTML = fila;
            
            document.getElementById(articulo.id).addEventListener("click", (e)=>{
                
                //e.preventDefault();
                console.log("borrando")
                const peticion4 = new XMLHttpRequest();
                peticion4.open('DELETE', 'http://localhost:3000/posts/'+articulo.id);
                peticion4.send();

                peticion4.addEventListener('load', compruebaBorrado);
        
        
                function compruebaBorrado(){
                
                if(peticion4.status===200){

                    window.location.href = "listaPost.html"

                } else {
                    alert("Error borrando datos");
                }
               
            
        }
            })




        })





        
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


        let select= document.getElementById("listaAutores")
        for(i=0;i<autores.length;i++){

           let option= document.createElement("option")
           option.innerHTML= '<option value="'+autores[i].name+'">'+autores[i].name+'</option>';

           select.appendChild(option)

           


            
            



        }





        
    } else {
        alert("Error en la lectura de datos");
    }
})



document.getElementById("enviar").addEventListener("click", addFila);

function addFila(ev){
    ev.preventDefault();


const peticion3=new XMLHttpRequest();
        peticion3.open('POST', 'http://localhost:3000/posts');
        peticion3.setRequestHeader('Content-type', 'application/json'); 

    const nuevoPosts={

    "titulo": document.getElementById("titulo").value,
      "autor": document.getElementById("listaAutores").value,
      "articulo":document.getElementById("articulo").value

    }

        peticion3.send(JSON.stringify(nuevoPosts)); 


        peticion3.addEventListener('load', compruebaPost);
        
        
        function compruebaPost(){
           
            if(peticion3.status==201){
                window.location.href = "listaPost.html"
            }else{
                
                alert("Los datos no se han enviado correctamente")
            }
            
        }

    }




