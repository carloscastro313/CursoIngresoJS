/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
 function FahrenheitCentigrados ()
{
	var temperatura;
	var centígrados;

	temperatura=document.getElementById('Temperatura').value;

	temperatura=parseInt(temperatura);

	centígrados=(temperatura-32)/8;

    alert(+temperatura+" Fahrenheit "+centígrados+" son centígrados");

}

 function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheit;

	temperatura=document.getElementById('Temperatura').value;

	temperatura=parseInt(temperatura);

	fahrenheit=(temperatura*8)+32;

	alert(+temperatura+" centígrados son "+fahrenheit+" son Fahrenheit");
}


