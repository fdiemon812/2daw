const peticion2 = new XMLHttpRequest();
peticion2.open('GET', 'http://localhost:3000/posts');
peticion2.send();
peticion2.addEventListener('load', function() {
    if (peticion2.status===200) {
        let listaPost=JSON.parse(peticion2.responseText);  // Convertirmos los datos JSON a un objeto
        console.log(listaPost)
        let valores= window.location.search;

        const parametros= new URLSearchParams(valores)
        let idPost= parametros.get('id');
    
        console.log(idPost)

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
        let comentario=JSON.parse(peticion.responseText); 
    comentarios.forEach(coment => {


        //si no entra coneguir parametro como arriba
        if(coment.postId==idPost){

            //añadir a filas

        }
        
        });
    }})