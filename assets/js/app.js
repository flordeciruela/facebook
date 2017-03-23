
window.addEventListener('load',function() {
	var loginButton = document.getElementById('login');

	var users = [{ id:0, emailInput : "user1@facebook.com", passInput : "pass1", muro : "index.html?id=0", allPosts: []},
							 { id:0, emailInput : "user2@facebook.com", passInput : "pass2", muro : "index.html?id=2", allPosts: []}];
	if(loginButton)
	loginButton.addEventListener('click',function() {
		var emailInput = document.getElementById('email').value;
		var passInput = document.getElementById('password').value;
		var estadoEmail = document.getElementById('estado-email');
		var estadoPass = document.getElementById('estado-pass');


		for (var user of users) { //para recorer los usuarios del array;

			var done=0;

			if (emailInput==user.emailInput && passInput==user.passInput) {
				localStorage.setItem("userId", user.id);
				window.location= users[0].muro;
			}

			if (emailInput !== user.emailInput || emailInput !== user.emailInput){
				estadoEmail.innerHTML = "Usuario es inválido";
			}
			if (emailInput == ""){
				estadoEmail.innerHTML = "El campo de usuario no puede estar en blanco";
			}
			if (passInput !== user.passInput || passInput !== user.passInput){
				estadoPass.innerHTML = "Password es incorrecto";
			}
			if (passInput == ""){
				estadoPass.innerHTML = "El campo de password no puede estar en blanco";
			}


		}

	});

});
