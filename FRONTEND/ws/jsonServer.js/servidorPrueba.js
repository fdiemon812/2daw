document.getElementById('addProduct').addEventListener('submit', (event) => {
    event.preventDefault();
    const newProduct={
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
    }    
    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://192.168.7.70:3000/posts');
    peticion.setRequestHeader('Content-type', 'application/json'); 
     // Siempre tiene que estar esta línea si se envían datos
    peticion.send(JSON.stringify(newProduct)); 
    // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
    //peticion.addEventListener('load', function() {
      // procesamos los datos
    
    //})
  })
  