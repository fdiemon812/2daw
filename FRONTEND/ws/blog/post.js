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