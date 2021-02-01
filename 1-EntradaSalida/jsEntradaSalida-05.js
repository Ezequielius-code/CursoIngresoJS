/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let name;
	let age;

	name = document.getElementById("txtIdNombre").value;
	age = document.getElementById("txtIdEdad").value;

	alert (`Usted se llama ${name} y tiene ${age} años.`);

	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";
}
