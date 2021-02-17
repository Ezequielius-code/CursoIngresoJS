/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 //Brutto, Ezequiel Andrés
/*function CalcularPrecio () 
{
 	var lightBulbs;
 	var brand;
 	var price;
 	var discount;
 	var finalPrice;
 	var grossIncome;
 	var message;
 	
 	lightBulbs = document.getElementById('txtIdCantidad').value;
 	lightBulbs = parseInt(lightBulbs);

 	brand = document.getElementById('Marca').value;

 	price = lightBulbs * 35;
 	discount = 0;


 	if (lightBulbs > 5) 
 	{
 		discount = 50;
 	}
 	else 
 	{
 		if (lightBulbs == 5) 
 		{
 			if (brand == "ArgentinaLuz") 
 			{
 				discount = 40;
 			}
 			else 
 			{
 				discount = 30;
 			}
 		}
 		else 
 		{
 			if (lightBulbs == 4) 
 			{
 				if (brand == "ArgentinaLuz" || brand == "FelipeLamparas") 
 				{
 					discount = 25;
 				}
 				else
 				{
 					discount = 20;
 				}
 			}
 			else 
 			{
 				if (lightBulbs == 3) 
 				{
 					if (brand == "ArgentinaLuz") 
 					{
 						discount = 15;
 					}
 					else 
 					{
 						if (brand == "FelipeLamparas") 
 					    {
 						discount = 10;
 					    }
 					    else 
 					    {
 					    	discount = 5;
 					    }
 					}
 				}
 			}
 		}
 	}

 	finalPrice = price - (price * discount / 100);

 	if (discount > 0 && finalPrice > 120) 
 	{
 		grossIncome = finalPrice * 10/100;  
 		finalPrice = finalPrice + grossIncome;
	    alert("Usted pagó $ " + grossIncome + ".- de IIBB");
 	}

 	message = "El precio final de su compra es de $ " + finalPrice + ".-" ;
    
    document.getElementById('txtIdprecioDescuento').value = message;
}*/	

//Brutto, Ezequiel Andrés.
/*function CalcularPrecio ()
{
	var lightBulbs;
 	var brand;
 	var price;
 	var discount;
 	var finalPrice;
 	var grossIncome;
 	var message;
 	
 	lightBulbs = document.getElementById('txtIdCantidad').value;
 	lightBulbs = parseInt(lightBulbs);

 	brand = document.getElementById('Marca').value;

 	price = lightBulbs * 35;
 	
    switch(lightBulbs)
 	{
 		case 1:
 		case 2:
 		    discount = 0;
 		    break;
 		case 3:
 		    switch(brand)
 		    {
 		    	case "ArgentinaLuz":
 		    	    discount = 15;
 		    	    break;
 		    	case "FelipeLamparas":
 		    	    discount = 10;
 		    	    break;
 		    	default:
 		    	    discount = 5;
 		    	    break;
 		    }
 		break;
 		case 4:
 		    switch(brand)
 		    {
 		    	case "ArgentinaLuz":
 		    	case "FelipeLamparas":
 		    	    discount = 25;
 		    	    break;
 		    	default:
 		    	    discount = 20;
 		    	    break;
 		    }
 		break;
 		case 5:
 		    switch(brand)
 		    {
 		    	case "ArgentinaLuz":
 		    	    discount = 40;
 		    	    break;
 		    	default:
 		    	    discount = 30;
 		    	    break;
 		    }
 		break;
 		default:
 		    discount = 50;
 		    break;

 	}

    finalPrice = price - (price * discount / 100);

 	if (discount > 0 && finalPrice > 120) 
 	{
 		grossIncome = finalPrice * 10/100;  
 		finalPrice = finalPrice + grossIncome;
	    alert("Usted pagó $ " + grossIncome + ".- de IIBB");
 	}

 	message = "El precio final de su compra es de $ " + finalPrice + ".-" ;
    
    document.getElementById('txtIdprecioDescuento').value = message;
}*/

//Brutto, Ezequiel Andrés.
/*function CalcularPrecio ()
{
	var lightBulbs;
 	var brand;
 	var price;
 	var discount;
 	var finalPrice;
 	var grossIncome;
 	var message;
 	
 	lightBulbs = document.getElementById('txtIdCantidad').value;
 	lightBulbs = parseInt(lightBulbs);

 	brand = document.getElementById('Marca').value;

 	price = lightBulbs * 35;
 	
    switch(lightBulbs)
 	{
 		case 1:
 		case 2:
 		    discount = 0;
 		    break;
 		case 3:
 		   if (brand == "ArgentinaLuz") 
 			{
 				discount = 15;
 			}
 			else 
 			{
 				if (brand == "FelipeLamparas") 
 				{
 					discount = 10;
 				}
 			    else 
 			    {
 					discount = 5;
 				}
 			}
 		break;
 		case 4:
 		    if (brand == "ArgentinaLuz" || brand == "FelipeLamparas") 
 			{
 				discount = 25;
 			}
 			else
 			{
 				discount = 20;
 			}
 		break;
 		case 5:
 		    if (brand == "ArgentinaLuz") 
 			{
 				discount = 40;
 			}
 			else 
 			{
 				discount = 30;
 			}
 		break;
 		default:
 		    discount = 50;
 		    break;

 	}

    finalPrice = price - (price * discount / 100);

 	if (discount > 0 && finalPrice > 120) 
 	{
 		grossIncome = finalPrice * 10/100;  
 		finalPrice = finalPrice + grossIncome;
	    alert("Usted pagó $ " + grossIncome + ".- de IIBB");
 	}

 	message = "El precio final de su compra es de $ " + finalPrice + ".-" ;
    
    document.getElementById('txtIdprecioDescuento').value = message;
}*/

//Brutto, Ezequiel Andrés
function CalcularPrecio () 
{
 	var lightBulbs;
 	var brand;
 	var price;
 	var discount;
 	var finalPrice;
 	var grossIncome;
 	var message;
 	
 	lightBulbs = document.getElementById('txtIdCantidad').value;
 	lightBulbs = parseInt(lightBulbs);

 	brand = document.getElementById('Marca').value;

 	price = lightBulbs * 35;
 	discount = 0;


 	if (lightBulbs > 5) 
 	{
 		discount = 50;
 	}
 	else 
 	{
 		if (lightBulbs == 5) 
 		{
 			switch(brand)
 		    {
 		    	case "ArgentinaLuz":
 		    	    discount = 40;
 		    	    break;
 		    	default:
 		    	    discount = 30;
 		    	    break;
 		    }
 		}
 		else 
 		{
 			if (lightBulbs == 4) 
 			{
 				switch(brand)
 		        {
 		    	    case "ArgentinaLuz":
 		    	    case "FelipeLamparas":
 		    	        discount = 25;
 		    	        break;
 		    	    default:
 		    	        discount = 20;
 		    	        break;
 		        }
 		    }
 			else 
 			{
 				if (lightBulbs == 3) 
 				{
 					switch(brand)
 		            {
 		    	        case "ArgentinaLuz":
 		    	            discount = 15;
 		    	            break;
 		    	        case "FelipeLamparas":
 		    	            discount = 10;
 		    	            break;
 		    	        default:
 		    	            discount = 5;
 		    	            break;
 		            }  
 			    } 				 			
 			}
 		}
 	}

 	finalPrice = price - (price * discount / 100);

 	if (discount > 0 && finalPrice > 120) 
 	{
 		grossIncome = finalPrice * 10/100;  
 		finalPrice = finalPrice + grossIncome;
	    alert("Usted pagó $ " + grossIncome + ".- de IIBB");
 	}

 	message = "El precio final de su compra es de $ " + finalPrice + ".-" ;
    
    document.getElementById('txtIdprecioDescuento').value = message;
}