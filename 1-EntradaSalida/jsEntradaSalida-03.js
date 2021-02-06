/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var name;
	var message;

	name = document.getElementById('txtIdNombre').value;

	message = "Usted se llama " + name;

	alert(message);
}




