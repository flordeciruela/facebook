
window.addEventListener('load',function() {

		var users = [{ id:1, emailInput : "user1@facebook.com", passInput : "pass1", muro : "index.html?id=1", allPosts: []},
								 { id:2, emailInput : "user2@facebook.com", passInput : "pass2", muro : "index.html?id=2", allPosts: []}];
								 
    var clickCount = 0;
		var userId = localStorage.getItem("userId");
    var arrayPosts = users[parseInt(userId)].allPosts;

    function Post(privacy, text){

     this.privacy = privacy;
     this.text = text;
     this.crearPost = function(){

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
                                   clickCount++
                                   if (clickCount % 2 != 0) {
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
                arrayPosts.push(new Post(privacy, text));  //inserta objeto nuevo Post en Array
                posts.appendChild(arrayPosts[arrayPosts.length -1].crearPost()); //ultimo post se inserta en section posts
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

});
