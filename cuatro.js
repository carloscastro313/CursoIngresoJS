function mostrar()
{
	var numerouno;
	var numerodos;
	var resta;
	var suma;

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

			resta=numerouno-numerodos;

			alert("La resta es "+resta);

		}else
		{
			if (numerouno<numerodos) 
			{

				suma=numerouno+numerodos;

				if (suma>50) 
				{
					
					alert("La suma es "+suma+" y es mayor a 50");

				}else
				{
					alert("La suma es "+suma);
				}
			}
		}
	}
}
