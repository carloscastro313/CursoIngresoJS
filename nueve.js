function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contador=0;
	var respuesta="si";
	var pares=0;
	var congelados=0;
	var suma=0;

	while(respuesta!="no")
	{

		contador++;

		marca=prompt("Ingrese marca");

		peso=prompt("Ingrese peso (1-100)");
		peso=parseInt(peso);

		while(isNaN(peso)||peso<1||peso>100)
		{
			
			peso=prompt("Reingrese peso (1-100)");
			peso=parseInt(peso);

		}


		temperatura=prompt("Ingrese temperatura(-30 a 30)");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			
			temperatura=prompt("Reingrese temperatura(-30 a 30)");
			temperatura=parseInt(temperatura);

		}

		if (temperatura%2==0) 
		{

			pares++;

		}

		if (contador==1) 
		{

			marcapesado=marca,
			pesado=peso;
			liviano=peso;		

		}else
		{
			if (peso>pesado) 
			{

				marcapesado=marca,
				pesado=peso;

			}else
			{
				if (peso<liviano) 
				{

					liviano=peso;

				}
			}
		}

		if (temperatura<0) 
		{

			congelados++;

		}

		suma=suma+peso;

		respuesta=prompt("Ingrese no para salir");


	}

	promedio=suma/contador;


	document.write("temperaturas pares: "+pares+"<br>");
	document.write("El producto mas pesado es "+marcapesado+"<br>");
	document.write("congelados: "+congelados+"<br>");
	document.write("Promedio: "+promedio+"<br>");
	document.write("Peso maximo"+pesado+"<br>");
	document.write("Peso minimo"+liviano+"<br>");

}

