/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividend;
	var divisor;
	var remainder;
	var message;

	dividend = document.getElementById('txtIdNumeroDividendo').value;
	divisor = document.getElementById('txtIdNumeroDivisor').value;

	dividend = parseInt(dividend);
	divisor = parseInt(divisor);

	remainder = dividend % divisor;

	message = "El resto de la división es " + remainder;

	alert(message);
}
