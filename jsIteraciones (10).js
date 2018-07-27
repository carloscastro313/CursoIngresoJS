function mostrar()
{
	var contador;
	var negativo;
	var positivo;
	var cantP;
	var cantN;
	var cantC;
	var cantPA;
	var PromedioPositivo;
	var PromedioNegativo;
	var resta;

	resta=0;
	PromedioNegativo=0;
	cantPA=0;
	cantC=0;
	cantN=0;
	cantP=0;
	positivo=0;
	negativo=0;
	contador=0;

	
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		var numero=prompt("ingrese numero");
		numero=parseInt(numero);

		
		if (numero<0) 
		{
			
			negativo=negativo+numero;
			cantN++;

		}
		else
		{
			if (numero>0)
			{
				
				positivo=positivo+numero;
				cantP++;

			}
			else
			{
				if (numero==0) 
				{

					cantC++;

				}
			}
		}

		if (numero%2==0&&numero!=0) 
		{
			
			cantPA++;

		}

		respuesta=prompt("Ingrese no para salir");
	}

	PromedioPositivo=positivo/cantP;
	PromedioNegativo=negativo/cantN;
	resta=positivo-negativo;


	document.write("La suma de negativos son: "+negativo+"<br>");
	document.write("La cantidad de numero negativos: "+cantN+"<br>");
	document.write("El promedio de negativos son: "+PromedioNegativo+"<br>");
	document.write("La suma de positivos son: "+positivo+"<br>");
	document.write("La cantidad de numero positivos: "+cantP+"<br>");
	document.write("El promedio de positivos son: "+PromedioPositivo+"<br>");
	document.write("La cantidad de cero son: "+cantC+"<br>");
	document.write("La cantidad de pares son: "+cantPA+"<br>");
 	document.write("La suma entre negativos y positivos es: "+resta+"<br>");
}//FIN DE LA FUNCIÓN