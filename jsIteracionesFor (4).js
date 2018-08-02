function mostrar()
{

	var contador;
	var respueta;


	for(contador=1;respueta!="break"  ; contador++)
	{
		respueta=prompt("son "+contador+" repeticiones, escriba break para salir");

		if (contador==100) 
		{
			break;
		}
	}
	console.log("Termino en "+contador);

}//FIN DE LA FUNCIÓN