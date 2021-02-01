/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let enterName;
	
	enterName= document.getElementById("txtIdNombre").value;

	alert(enterName);

	document.getElementById("txtIdNombre").value= "";

}


