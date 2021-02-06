/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var name;
	var message;

	name = prompt("Por favor, ingrese su nombre")

	message = "Su nombre es " + name;

	alert(message);
}

