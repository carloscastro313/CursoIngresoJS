function mostrar()
{

	var contador=0;
	var acumulador=0;
	var n;

	n=prompt("Ingrese numero");	

	n=parseInt(n);
	
	acumulador+=n;
	contador++;

	while(contador<5){
							
		n=prompt("Ingrese numero");
		
		n=parseInt(n);

		acumulador+=n;
		contador++;	
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN