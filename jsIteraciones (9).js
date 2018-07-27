function mostrar()
{
	var numero;
	var menor;
	var mayor;
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt(" Ingrese numero");
		numero=parseInt(numero);

		if (contador==0) {

			mayor=numero;
			menor=numero;

		}else{
			if (numero>mayor) {

				mayor=numero;

			}else{
				if (numero<mayor&&numero<menor) {

					menor=numero;

				}
			}
		}
		
		respuesta=prompt(contador+" Numero ingresados, ¿desea continuar? si o no");

		contador++;
	
	}

	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;


}//FIN DE LA FUNCIÓN