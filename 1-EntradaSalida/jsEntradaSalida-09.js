/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salary;
	var payRaise;
	var newSalary;

	salary = document.getElementById('txtIdSueldo').value;

	salary = parseInt(salary);

	payRaise = salary * 10 / 100;

	newSalary = salary + payRaise;

	document.getElementById('txtIdResultado').value = newSalary;
}
