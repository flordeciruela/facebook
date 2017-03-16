
  var contador = 0;
  var amigos = new Array();
  var publico = new Array();


document.getElementById('publicar').addEventListener('click',function() {

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
                          posts.removeChild(nuevoDiv);
                  });



         nuevoDiv.appendChild(nuevaTextarea);
         nuevoDiv.appendChild(br);
         nuevoDiv.appendChild(editar);
         nuevoDiv.appendChild(eliminar);
         posts.appendChild(nuevoDiv);

      }

     document.getElementById("caja").reset();
               /*
               document.getElementById("posts").innerHTML +=
               "<div class=\'post\' contenteditable=\'false\' style=\'border:1px solid blue\'>"+text+
               "<br><a href=\'#\' class=\'editor\'>Editar</a><a href=\'#\'>Eliminar</a></div>";
               */

});

document.getElementById('publico').addEventListener('click',function() {

        alert("Mostrando publicaciones de privacidad: público.");
});

document.getElementById('amigos').addEventListener('click',function() {

        alert("Mostrando publicaciones de privacidad: amigos.");
});

/*
         function Crear(privacidad, text){

          this.privacidad = privacidad;
          this.text = text;
          this.agregar = function(){

                              var ficha = document.createElement('div');
                              var datos = document.createElement('p');
                              datos.innerHTML += "Nombre: "+this.nombre+
                                                 "<br>Edad: " +this.edad+
                                                 "<br>País: " +this.pais;

                              ficha.appendChild(datos);
                              return ficha;
                              };

          }*/
