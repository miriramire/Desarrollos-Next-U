(function($){
	var inputUser = $('#username')
	var URL = 'https://api.github.com/users/'
	inputUser.on('keypress', function(e){
		if (e.which === 13) {
			var username = $(this).val().trim().toLowerCase()
			if (username != "") {
				var XHR = new XMLHttpRequest()
				var URLUser = URL + username
				XHR.open('GET', URLUser)
				XHR.onreadystatechange = function(){
					if (XHR.readyState === 4) {
						var data = JSON.parse(XHR.responseText)
						if (data.message && data.message == "Not Found") {
							alert("El usuario no existe en Github")
						} else {
							$('img').attr('src', data.avatar_url)
							$('.name').text(data.name)
							$('.username').text(data.login)
							$('.email').text(data.email)
							$('.company').text(data.company)
							$('.location').text(data.location)
							$('.followers').text(data.followers)
						}
					}
				}
				XHR.send(null)
			} else {
				alert("Debe Ingresar un nombre")
			}
		}
	})
})(jQuery)