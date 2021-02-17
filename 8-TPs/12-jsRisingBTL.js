/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
 //Brutto, Ezequiel Andrés.
function ComenzarIngreso () 
{
 	//definicion de variables
 	var age;
 	var gender;
 	var maritalStatus;
 	var grossSalary;
 	var fileNumber;
 	var nationality;
 	var message;

 	message = "Gracias por llenar el formulario,\n verifique que sus datos sean correctos \n para ingresarlos a la base de datos.";

 	age = prompt("Hola!!! Ingrese su edad:");
 	age = parseInt(age);
    while(isNaN(age) == true || age < 18 || age > 90)
 	{
 		age = prompt("Por favor, ingrese correctamente su edad:");
 		age = parseInt(age);
 	}
    age = "Edad: " + age + " AÑOS.";

 	gender = prompt("Por favor, indique su sexo.\n (F)EMENINO o (M)ASCULINO.");
    while(gender != "F" && gender != "M")
	{
		gender = prompt("Por favor, indique correctamente su sexo \n (F)EMENINO o (M)ASCULINO.");
	}
	if(gender == "F")
	{
		gender = "Sexo: FEMENINO.";
	}
	else
	{
		gender = "Sexo: MASCULINO.";
	}

	maritalStatus = prompt("Ahora, indique su estado civil:\n (1) SOLTERO/A, (2)CASADO/A, (3)DIVORCIADO/A o (4)VIUDO/A. ");
	maritalStatus = parseInt(maritalStatus);
    while(isNaN(maritalStatus) == true || maritalStatus < 1 || maritalStatus > 4)
	{
		maritalStatus = prompt("Por favor, ingrese correctamente su estado civil:\n (1) SOLTERO/A, (2)CASADO/A, (3)DIVORCIADO/A o (4)VIUDO/A. ");
	    maritalStatus = parseInt(maritalStatus);
	}
    switch(maritalStatus)
	{
		case 1: 
		    maritalStatus = "Estado civil: SOLTERO/A.";
		    break;
		case 2:
		    maritalStatus = "Estado civil: CASADO/A.";
		    break;
		case 3:
		    maritalStatus = "Estado civil: DIVORCIADO/A.";
		    break;
		case 4:
		    maritalStatus = "Estado civil: VIUDO/A.";
		    break;
	}

	grossSalary = prompt("¿Cuál es su sueldo bruto?\n (recuerde que no debe ser menor a $8000.-)");
	grossSalary = parseInt(grossSalary);
    while(isNaN(grossSalary) == true || grossSalary < 8000)
    {
    	grossSalary = prompt("Por favor, ingrese correctamente su sueldo bruto\n (no menor a $8000.-)");
	    grossSalary = parseInt(grossSalary);
    }
    grossSalary = "Sueldo bruto: $ " + grossSalary + ".-";

    fileNumber = prompt("Ahora, ingrese su N° de Legajo:");
    fileNumber = parseInt(fileNumber);
    while(isNaN(fileNumber) == true || fileNumber < 1000 || fileNumber >9999)
    {
    	fileNumber = prompt("Por favor, ingrese correctamente su N° de Legajo:");
        fileNumber = parseInt(fileNumber);
    }
    fileNumber = "Su N° de Legajo es: " + fileNumber + ".";

    nationality = prompt("Por último, díganos su nacionalidad:\n (A)RGENTINA, (E)XTRANJERA, o (N)ACIONALIZADO/A.");
    while(nationality != "A" && nationality != "E" && nationality != "N")
	{
		nationality = prompt("Por favor, indique correctamente su nacionalidad: \n (A)RGENTINA, (E)XTRANJERA, o (N)ACIONALIZADO/A.");
	}
	if(nationality == "A")
	{
		nationality = "Nacionalidad: ARGENTINA.";
	}
	else
	{
		if (nationality == "E") 
		{
			nationality = "Nacionalidad: (E)XTRANJERA.";
		}
		else
		{
			nationality = "Nacionalidad: (N)ACIONALIZADO/A.";
		}
	}

	alert(message);

	document.getElementById('txtIdEdad').value = age;
	document.getElementById('txtIdSexo').value = gender;
	document.getElementById('txtIdEstadoCivil').value = maritalStatus;
	document.getElementById('txtIdSueldo').value = grossSalary;
	document.getElementById('txtIdLegajo').value = fileNumber;
	document.getElementById('txtIdNacionalidad').value = nationality;
}
