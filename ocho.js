function mostrar()
{
	var numero;
	var letra;
	var respuesta="si";
	var contador=0;
	var pares=0;
	var impares=0;
	var cero=0;
	var positivos=0;
	var promedio=0;
	var negativos=0;

	while(respuesta!="no")
	{

		contador++;

		letra=prompt("Ingrese letra"+contador);

		numero=prompt("Ingrese numero"+contador);
		numero=parseInt(numero);

		while(isNaN(numero)||numero<-100||numero>100)
		{
			
			numero=prompt("Reingrese numero"+contador);
			numero=parseInt(numero);

		}

		if (numero%2==0) 
		{

			pares++;

		}else
		{
			if (numero%2!=0) 
			{
				
				impares++;

			}else
			{
				if (numero==0) 
				{

					cero++;

				}
			}	
		}

		if (numero>0) 
		{
			
			positivos=positivos+numero;

		}else
		{
			if (numero<0) 
			{

				negativos=negativos+numero;

			}
		}
		


		if (contador==1) 
		{
			numeromayor=numero;
			letramayor=letra;
			numeromenor=numero;
			letramenor=letra;

		}else
		{

			if (numero>numeromayor) 
			{
				
				numeromayor=numero;
				letramayor=letra;
	
			}else
			{
				if (numero<numeromenor) 
				{
					
					numeromenor=numero;
					letramenor=letra;

				}
			}
		}

		respuesta=prompt("Ingrese no para salir");


	}

	promedio=positivos/contador;

	document.write("Pares:"+pares+"<br>");
	document.write("Impares:"+impares+"<br>");
	document.write("Ceros:"+cero+"<br>");
	document.write("Promedio:"+promedio+"<br>");
	document.write("Negativos:"+negativos+"<br>");
	document.write("El maximo es "+numeromayor+" y su letra es "+letramayor+"<br>");
	document.write("El minimo es "+numeromenor+" y su letra es "+letramenor+"<br>");



}
