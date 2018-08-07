function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var suma;
	var contador;

	suma=0;
	promedio=0;
	varones=0;
	contador=0;



	while(contador<5)
	{

		contador++;
		
		nota=prompt("Ingrese nota (0-10)");
		nota=parseInt(nota);

		while(nota<0||nota>10)
		{
			
			nota=prompt("Reingrese nota (0-10)");
			nota=parseInt(nota);

		}

		sexo=prompt("Ingrese sexo");

		while(sexo!="f"&&sexo!="m")
		{
			
			sexo=prompt("Reingrese sexo");

		}

		if (contador==1) 
		{
			
			peornota=nota;
			peorsexo=sexo;

		}else
		{
			if (nota<peornota) 
			{
				
				peornota=nota;
				peorsexo=sexo;

			}
		}

		if (nota<7&&sexo=="m") 
		{

			varones++;

		}

		suma=suma+nota;
	}

	promedio=suma/contador;

	alert("El promedio es "+promedio+"\nLa nota mas baja es "+peornota+" y su sexo es "+peorsexo+"\nLa cantidad de varones desaprobados es "+varones);
}
