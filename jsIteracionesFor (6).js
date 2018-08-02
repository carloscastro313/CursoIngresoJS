function mostrar()
{
	var contador;
	var cantidaddeveces;
	var pares;
	var cantidaddepares;

	cantidaddepares=0;
	cantidaddeveces=prompt("Ingrese conteo:");

	for(contador=1 ;contador<=cantidaddeveces ;contador++)
	{
		if (contador%2==0) 
		{
			
			alert(contador);

			cantidaddepares++;

		}
	}

	alert("La cantidad de pares contados son: "+cantidaddepares);


}//FIN DE LA FUNCIÓN