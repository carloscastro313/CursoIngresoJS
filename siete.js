/*
JOSE
MARIA
FER
GER
SUSANA
MIRTA

1 SEXO PEOR nota
2 NOMBRE DEL MAS VIEJO
3 nota DEL MAS CHICO
*/
function mostrar()
{
	var nota;
	var alumno;
	var sexo;
	var edad;
	var edadmayor=0;
	var edadmenor=100;
	var peornota=10;
	var sexobajo;
	var viejo;
	var chico;
	var contador=0;
	
	while(contador<6)
	{
		alumno=prompt("Nombre");

		sexo=prompt("sexo");

		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("sexo");
			
		}

		edad=prompt("edad");
		edad=parseInt(edad);

		while(isNAN!=(edad)||edad>0||edad<100)
		{
			edad=prompt("edad");
			edad=parseInt(edad);
		}

		nota=prompt("nota");
		nota=parseInt(nota);
		
		while(isNAN!=(nota)||nota>0||nota<10)
		{
			nota=prompt("nota");
			nota=parseInt(nota);
		}

		if (nota<peornota) 
		{
			
			peornota=nota;
			sexobajo=sexo;

		}
		if (edad>edadmayor) 
		{
			
			edadmayor=edad;
			viejo=alumno;

		}else
		{
			if (edad<edadmenor) 
			{
				
				edadmenor=edad;
				chico=nota;

			}
		}
	
		contador++;
	}
	
	alert("La nota mas baja es un "+peornota+" y sexo "+sexobajo+", La persona mas vieja es "+viejo+" y por ultimo la nota del mas chico es "+chico);

}
