/*
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var celsius;
	var message;

	fahrenheit = document.getElementById('txtIdTemperatura').value;
	fahrenheit = parseInt(fahrenheit);

	celsius = (fahrenheit - 32) / 1.8;

	message = `${fahrenheit} °F son ${celsius} °C`;

	alert(message);
}

function CentigradosFahrenheit () 
{
	var celsius;
	var fahrenheit;
	var message;

	celsius = document.getElementById('txtIdTemperatura').value;
	celsius = parseInt(celsius);

	fahrenheit = (celsius * 1.8) + 32;

	message = `${celsius} °C son ${fahrenheit} °F`;

	alert(message);
}
