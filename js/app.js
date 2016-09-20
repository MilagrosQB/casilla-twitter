window.addEventListener("load", function() {
	var button = document.getElementById("tweet");
	button.disabled = true;
	button.addEventListener("click", function() {
		event.preventDefault();
		var mensaje = document.getElementById("mensaje").value;
		reTwitter(mensaje);
		document.getElementById("mensaje").value = "";
		contador.textContent = "140";
	});

	function reTwitter(mensaje) {
		var divjr = document.createElement("div");
		var divdaddy = document.getElementById("divdaddy");

		divjr.innerHTML = mensaje;

		if(!divdaddy.childNodes[0]){
			divdaddy.appendChild(divjr);
		}else{
			divdaddy.insertBefore(divjr, divdaddy.childNodes[0]);
		}
	}

	mensaje.addEventListener("keydown",function(){
		button.disabled = false;
		contador(mensaje);
		});

		function contador(mensaje){
			var limite = 140;
			var longitud = document.getElementById("mensaje").value.length;
			document.getElementById("contador").innerHTML= limite-longitud;
			if((limite-longitud) <= 130){
				document.getElementById("contador").style.color = "#0000FF";
			}
			if((limite-longitud) <= 120){
				document.getElementById("contador").style.color = "#A901DB";
			}
			if(longitud >= limite) {
				button.disabled = true;
				document.getElementById("contador").style.color = "#FF0000";
			}
		}
	});

	mensaje.addEventListener("keydown", autosize);
		button.disabled = false;             
	function autosize(){
	  var size = this;
	  setTimeout(function(){
	    size.style.cssText = "height:auto; padding:10";
	    size.style.cssText = "height:" + size.scrollHeight +"px";
	    },0);
		
		if(longitud >= limite) {
		button.disabled = true;
		}
	}