function mostrar()
{
	var numero;
	var contador;
	var resto;
	var divisores;

	divisores=0;

	numero=prompt("Ingrese numero:"); 

	for(contador=1 ;contador<=numero ;contador++ )
	{
		if(numero%contador==0)
		{
			
			alert("divisor de "+numero+": "+contador);

			divisores++;
			
		}
	}
	
	alert("cantidad de divisores del numero "+numero+" son: "+divisores);

}//FIN DE LA FUNCIÓN