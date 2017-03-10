
window.addEventListener('load',function() {

  var postButton = document.getElementById('publicar');

        postButton.addEventListener('click',function() {
// https://www.w3schools.com/jsref/dom_obj_textarea.asp

               var text = document.getElementById("post_input").value;
               var editar = document.getElementById('rditar');
               var amigos = [];
               var publico = [];


               if (text == "") {alert("No has ingresado ningun texto");
             }else{
               document.getElementById("posts").innerHTML +=
               "<div class=\'post\' contenteditable=\'false\'>"+text+
               "<br><a href=\'#\' class=\'editor\'>Editar</a><a href=\'#\'>Eliminar</a></div>";
              }

                  editar.addEventListener('click',function() {
                    document.getElementByClassName('post').contentEditable = true;
                  });
         });
});
