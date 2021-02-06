/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var name;
	var message;

	name = prompt("Por favor, ingrese su nombre:");

	message = "Hola " + name + "!";

	document.getElementById('txtIdNombre').value = message;
}







