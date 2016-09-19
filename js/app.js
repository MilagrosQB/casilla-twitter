window.addEventListener("load", function() {
	var button = document.getElementById("tweet");
	button.addEventListener("click", function() {
			event.preventDefault();
			var mensaje = document.getElementById("mensaje").value;
			reTwitter(mensaje);
		});

	function reTwitter(mensaje) {
		var divjr = document.createElement("div");
		var divdaddy = document.getElementById("divdaddy");

		divjr.innerText = mensaje;

		if(!divdaddy.childNodes[0]){
			divdaddy.appendChild(divjr);
		}else{
			divdaddy.insertBefore(divjr, divdaddy.childNodes[0]);
		}
	}
});