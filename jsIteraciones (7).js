function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';

	while(respuesta!="no"){
		
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
		contador++;

		respuesta=prompt(+contador+ " numero sumados,¿Desea continuar? si o no");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN