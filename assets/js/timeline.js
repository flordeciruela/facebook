
    var contador = 0;
    var arrayPosts = new Array();

    function Post(privacy, text){

     this.privacy = privacy;
     this.text = text;
     this.crear = function(){

                             var nuevoDiv = document.createElement('div');
                                            if (this.privacy == "amigos") {
                                                nuevoDiv.setAttribute("class", "amigos");
                                            } else {
                                                nuevoDiv.setAttribute("class", "publico");
                                            }

                             var nuevaTextarea = document.createElement('textarea');
                             var br = document.createElement('br');

                             nuevaTextarea.value=this.text;
                             nuevaTextarea.readOnly = "true";

                             var editar = document.createElement('a');
                             editar.setAttribute('href',"#");
                             editar.innerHTML = "Editar";
                             var eliminar = document.createElement('a');
                             eliminar.setAttribute('href',"#");
                             eliminar.innerHTML = "Eliminar";

                             //Eventos para editar y eliminar posts:
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

                                   eliminar.addEventListener('click',function() {
                                        if(confirm("¿Estas seguro de querer eliminar este post?") == true) {
                                           posts.removeChild(nuevoDiv); }
                                   });

                             nuevoDiv.appendChild(nuevaTextarea);
                             nuevoDiv.appendChild(br)
                             nuevoDiv.appendChild(editar);
                             nuevoDiv.appendChild(eliminar);
                             return nuevoDiv;
                             };

     }

    document.getElementById('publicar').addEventListener('click',function(event) {
      event.preventDefault();

      var text = document.getElementById("post_input").value;
      var privacy = document.getElementById('privacy').value;
      var posts = document.getElementById('posts');

          if (text == "") {alert("No has ingresado ningun texto");
          }else{

                arrayPosts.push(new Post(privacy, text));  //inserta objeto nuevo en Array
                posts.appendChild(arrayPosts[arrayPosts.length -1].crear());
               }

          document.getElementById("caja").reset();
    });

//Funciones para filtrar posts:
  var showPublic = document.getElementById('publico');
  showPublic.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div');
        for(var i in divs){
            if(divs[i].classList == "publico"){
              divs[i].style.display="block";
              } else {
              divs[i].style.display="none"
              }
          }
  })

  var showFriends = document.getElementById('amigos');
  showFriends.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div');
        for(var i in divs){
            if(divs[i].classList == "amigos"){
              divs[i].style.display="block";
              } else {
              divs[i].style.display="none"
              }
           }
  })
