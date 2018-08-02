function mostrar()
{
	var numerouno;
	var numerodos;

	numerouno=prompt("Ingrese numero");
	numerodos=prompt("Ingrese numero");
	
	if (numerouno==numerodos) 
	{
		alert(numerouno+numerodos);
	}else
	{
		
		numerouno=parseInt(numerouno);
		numerodos=parseInt(numerodos);

		if (numerouno>numerodos) 
		{
			
			var resta;

			resta=numerouno-numerodos;

			alert("La resta es: "+resta);


		}else
		{
			if (numerodos>numerouno) 
			{
				
				var suma;

				suma=numerouno+numerodos;

				if (suma>10) 
				{
					alert("La suma es "+suma+" y es superios a 10");
				}else
				{
					alert("La suma es "+suma);
				}

			}
		}
	}
}
