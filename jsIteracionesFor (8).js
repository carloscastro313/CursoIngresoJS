function mostrar()
{
	var numero;
	var contador;
	var primo=0;
	numero=prompt("Ingrese numero: ");

	for(contador=1 ;contador<numero ;contador++)
	{
		if (numero%contador==0&&numero%numero==0) 
		{			
			
			primo++;

		}
	}
	if (primo==2) 
	{
		
		alert("Es primo.");

	}else
	{
		
		alert("No es primo");

	}


}//FIN DE LA FUNCIÓN