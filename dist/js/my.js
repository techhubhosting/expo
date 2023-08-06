// Establece la fecha límite
var countDownDate = new Date("Sep 22, 2023 10:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var x = setInterval(function() {

	// Obtiene la fecha y hora actual
	var now = new Date().getTime();

	// Calcula la diferencia entre la fecha límite y la fecha actual
	var distance = countDownDate - now;

	// Calcula los días, horas, minutos y segundos restantes
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  	// Muestra los resultados en los elementos correspondientes
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
                                        
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "¡Ya llegó el 15 de abril!";
	}
}); // cierra la función setInterval y la llave de la función anónima
