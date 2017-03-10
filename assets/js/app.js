
window.addEventListener('load',function() {
  var loginButton = document.getElementById('login');

  loginButton.addEventListener('click',function() {
    var emailInput = document.getElementById('email').value;
    var passInput = document.getElementById('password').value;
    var estadoEmail = document.getElementById('estado-email');
    estadoEmail.style.color = "red";
    var estadoPass = document.getElementById('estado-pass');
    estadoPass.style.color = "red";

    var users = [{ id:1, emailInput : "user1@facebook.com", passInput : "pass1", muro : "index.html?id=1"},
							   { id:2, emailInput : "user2@facebook.com", passInput : "pass2", muro : "index.html?id=2"}];

               for (var i in users) { //para recorer los usuarios del array;
                    var done=0;

                        if (emailInput==users[0].emailInput && passInput==users[0].passInput) {
                        window.location= users[0].muro;
                        }
                        if (emailInput==users[1].emailInput && passInput==users[1].passInput) {
                        window.location= users[1].muro;
                        }
                        if (emailInput !== users[0].emailInput || emailInput !== users[1].emailInput){
                        estadoEmail.innerHTML = "Usuario es inválido";
                        }
                        if (emailInput == ""){
                        estadoEmail.innerHTML = "El campo de usuario no puede estar en blanco";
                        }
                        if (passInput !== users[0].passInput || passInput !== users[1].passInput){
                        estadoPass.innerHTML = "Password es incorrecto";
                        }
                        if (passInput == ""){
                        estadoPass.innerHTML = "El campo de password no puede estar en blanco";
                        }


               }
/*
https://www.w3schools.com/jsref/dom_obj_textarea.asp
            function myFunction() {
             var x = document.getElementById("post_input").value;
             document.getElementById("post").innerHTML = x;
           }

*/

  });
});
