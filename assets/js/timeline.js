
    var contador = 0;

  document.getElementById('publicar').addEventListener('click',function(event) {
    event.preventDefault();

    var text = document.getElementById("post_input").value;
    var privacy = document.getElementById('privacy').value;
    var posts = document.getElementById('posts');

        if (text == "") {alert("No has ingresado ningun texto");
        }else{

           var nuevoDiv = document.createElement('div');
                          if (privacy == "amigos") {
                              nuevoDiv.setAttribute("class", "amigos");
                          } else {
                              nuevoDiv.setAttribute("class", "publico");
                          }

           var nuevaTextarea = document.createElement('textarea');
           var br = document.createElement('br');

           nuevaTextarea.value=text;
           nuevaTextarea.readOnly = "true";

           var editar = document.createElement('a');
           editar.setAttribute('href',"#");
           editar.innerHTML = "Editar";

                         editar.addEventListener('click',function() {
                         contador++
                         if (contador % 2 != 0) {
                             nuevaTextarea.removeAttribute('readonly');
                             editar.innerHTML = "Guardar";
                         }else{
                             nuevaTextarea.readOnly = "true";
                             editar.innerHTML = "Editar";
                             }
                         });

           var eliminar = document.createElement('a');
           eliminar.setAttribute('href',"#");
           eliminar.innerHTML = "Eliminar";

                    eliminar.addEventListener('click',function() {
                         if(confirm("¿Estas seguro de querer eliminar este post?") == true) {
                            posts.removeChild(nuevoDiv); }
                    });



           nuevoDiv.appendChild(nuevaTextarea);
           nuevoDiv.appendChild(br);
           nuevoDiv.appendChild(editar);
           nuevoDiv.appendChild(eliminar);
           posts.appendChild(nuevoDiv);

        }

        document.getElementById("caja").reset();

  });

  var fPublico = document.getElementById('publico');
  fPublico.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div');
    for(var i = 0;i<divs.length;i++){
      if(divs[i].classList == "publico"){
        divs[i].style.display="block";
      }
      else {
        divs[i].style.display="none"
      }
    }
  })


  var fAmigos = document.getElementById('amigos');
  fAmigos.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div');
    for(var i = 0;i<divs.length;i++){
      if(divs[i].classList == "amigos"){
        divs[i].style.display="block";
      }
      else {
        divs[i].style.display="none"
      }
    }
  })

/*
           function CrearPost(privacidad, text){

            this.privacidad = privacidad;
            this.text = text;
            this.crear = function(){

                                    var nuevoDiv = document.createElement('div');
                                                   if (privacy == "amigos") {
                                                       nuevoDiv.setAttribute("class", "amigos");
                                                   } else {
                                                       nuevoDiv.setAttribute("class", "publico");
                                                   }



                                    return nuevoDiv;
                                    };

            }
            */
