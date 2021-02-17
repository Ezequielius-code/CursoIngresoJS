/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*function sumar()
{
	var numberOne;
	var numberTwo;
	var result;
	var message;

	numberOne = document.getElementById('txtIdNumeroUno').value;
	numberTwo = document.getElementById('txtIdNumeroDos').value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	result = numberOne + numberTwo;

	message = "El resultado de la suma es: " + result;

	alert(message);

	document.getElementById('txtIdNumeroUno').value = "";
	document.getElementById('txtIdNumeroDos').value = "";
}*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

/*function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos

	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//ingreso
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroDos=parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	//fin ingreso
	//inicio operar
	resultado=numeroDos+numeroUno;
	mensaje="la suma es : "+resultado;

	//mostrar
	//alert("la suma es : "+(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value)));
	alert(mensaje);

}*/

//Brutto, Ezequiel Andrés
/*1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:*/
/*function sumar()
{
	var distance;
	var elapsedTime;
	var speed;
	var advice;
	var message;
	
	distance=document.getElementById('txtIdNumeroUno').value;
	elapsedTime=document.getElementById('txtIdNumeroDos').value;

	distance = parseInt(distance);
	elapsedTime=parseInt(elapsedTime);

	speed = distance / elapsedTime;

	if (speed < 61) 
	{
		advice = "muy lento.";
	}
	else
	{
		if (speed < 81) 
		{
			advice = "lento.";
		}
		else 
		{
			if (speed < 101) 
			{
				advice = "a buen ritmo.";
			}
			else 
			{
				if (speed < 121) 
				{
					advice = "ahí de la ley.";
				}
				else
				{
					advice = "ESO NO SE HACE!!!";
				}
			}
		}
	}
	
	message = "Usted viajó a " + speed + "km/h su viaje fue " + advice;
	alert(message);
}*/


//Brutto, Ezequiel Andrés
/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/

function sumar()
{
	var weight;
	var height;
	var bmi;
	var message;
	var text;

	weight = document.getElementById('txtIdNumeroUno').value;
	height = document.getElementById('txtIdNumeroDos').value;

	weight = parseInt(weight);
	height = parseInt(height);

	height = height * (1 / 100);

	bmi = weight / (height * height);

	if (bmi < 18.5) 
	{
		message = "BAJO PESO.";
	}
	else
	{
		if (bmi < 25) 
		{
			message = "NORMAL.";
		}
		else
		{
			if (bmi < 30) 
			{
				message = "PREOBESIDAD.";
			}
			else
			{
				if (bmi < 35) 
				{
					message = "OBESIDAD I.";
				}
				else
				{
					if (bmi < 40) 
					{
						message = "OBESIDAD II.";
					}
					else
					{
						message = "OBESIDAD III.";
					}
				}
			}
		}
	}
	
    text = "Su IMC es de " + bmi + ". Su rango es " + message;
    
    alert(text);
}

