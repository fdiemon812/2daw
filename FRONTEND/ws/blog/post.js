const peticion2 = new XMLHttpRequest();
peticion2.open('GET', 'http://localhost:3000/posts');
peticion2.send();
peticion2.addEventListener('load', function() {
    if (peticion2.status===200) {
        let listaPost=JSON.parse(peticion2.responseText);  // Convertirmos los datos JSON a un objeto
        let valores= window.location.search;

        const parametros= new URLSearchParams(valores)
        let idPost= parametros.get('id');
    

        let posicionPost= listaPost.findIndex(post => post.id == idPost);

        
        
    document.getElementsByTagName("header")[0].innerHTML=listaPost[posicionPost].titulo;          
    document.getElementsByTagName("p")[0].innerHTML=listaPost[posicionPost].articulo;    

        
    } else {
        alert("Error en la lectura de datos");
    }
})


const peticion = new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/comments');
peticion.send();
peticion.addEventListener('load', function() {

    //EN REALIDAD EL LOAD YA COMPRUEBA SI HA SIDO ENVIADO CORRECTAMENTE, NO HACE FALTA EL IF
    if (peticion.status===200) {


     let comentarios=JSON.parse(peticion.responseText); 
     let valores2= window.location.search;

     const parametros2= new URLSearchParams(valores2)
     let idPost2= parametros2.get('id');
    
    
    
     comentarios.forEach(coment => {


        let miTabla= document.getElementById("tabla")

        if(coment.postId==idPost2){



            let fila = '<tr><td>'+coment.contenido + '</td><td>'+coment.fecha+'</td></tr>';
            
            miTabla.insertRow().innerHTML= fila;
            
        }
        
        });
    }})




    document.getElementById("enviar").addEventListener("click", addFila);

    function addFila(ev){
        ev.preventDefault();
    
    
    const peticion3=new XMLHttpRequest();
            peticion3.open('POST', 'http://localhost:3000/comments');
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
