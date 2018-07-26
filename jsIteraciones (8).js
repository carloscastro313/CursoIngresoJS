function mostrar()
{

	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta!="no"){

		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		if (numero<0) {

			negativo=negativo*numero;

		}else{
			if (numero>=0) {
				
				positivo=positivo+numero;

			}
		}
		contador++;

		respuesta=prompt(contador+" numeros ingresados,¿Desea continuar? si o no.");
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN