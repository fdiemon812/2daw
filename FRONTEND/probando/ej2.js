
document.getElementById("consultar").addEventListener("click", listarSelect)

function listarSelect(ev){
ev.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then(function(response){
        if(response.ok){

            return response.json();
        }else {

            return Promise.reject();
        }



    })



    .then(function(datos){

        
        let htmlNuevo="";
        datos.forEach(element => {

            htmlNuevo=htmlNuevo+'<option value="'+element.name+'" id='+element.id+'>'+element.name+'</option>'


            
        });

        document.getElementsByTagName("select")[0].insertAdjacentHTML("beforeend", htmlNuevo);
        
    })
    
    
    
    .catch(function(){

        alert("ERRORRR")
    })

}

document.getElementById("lista").addEventListener("change", crearTabla);
function crearTabla(){
    let url= "https://jsonplaceholder.typicode.com/users" + 
    fetch(url).then(function(response){

        
            if(response.ok){
                return response.json();

            }else {

                return Promise.reject();
            }


    }).then(function(datos){



        console.log(datos)


    }).catch(function(error){})

}