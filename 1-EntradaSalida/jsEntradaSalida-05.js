/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var name;
	var age;
	var message;

	name = document.getElementById('txtIdNombre').value;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	message = "Usted se llama " + name + " y tiene " + age + " años.";

	alert(message);
}
/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan

function mostrar()
{
	var name;
	var age;
	var surname;
	var message;

	name = document.getElementById('txtIdNombre').value;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	surname = prompt("Ingrese su apellido:");

	message = surname + ", usted se llama " + name + " y tiene " + age + " años.";

	alert(message);
}
*/
