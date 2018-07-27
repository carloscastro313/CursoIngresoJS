/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estado;
 	var sueldo;
 	var legajo;
 	var nacionalidad;

 	edad=prompt("Ingrese edad");

 	while(!(edad>17&&edad<90))
 	{
 		
 		alert("Dato invalido");

 		edad=prompt("Ingrese edad");

 	}

 	sexo=prompt("Ingrese sexo");

 	while(sexo!="f"&&sexo!="m")
 	{
 		
 		alert("Dato invalido");

 		sexo=prompt("Ingrese sexo");

 	}

 	estado=prompt("Ingrese Estado civil");

 	while(estado!="soltero"&&estado!="casado"&&estado!="divorciado"&&estado!="viudo")
 	{

 		alert("Dato invalido");

 		estado=prompt("Ingrese Estado civil");

 	}

 	sueldo=prompt("Ingrese sueldo");

 	while(sueldo<8000)
 	{

 		alert("Dato invalido");

 		sueldo=prompt("Ingrese sueldo");

 	}

 	legajo=prompt("Ingrese legajo");

 	while(legajo>9999||legajo<0000)
 	{
 		
 		alert("Dato invalido");

 		legajo=prompt("Ingrese legajo");
 	}

 	nacionalidad=prompt("Ingrese nacionalidad");

 	while(nacionalidad!="argentino"&&nacionalidad!="extranjeros"&&nacionalidad!="nacionalizado")
 	{
 		
 		alert("Dato invalido");

 		nacionalidad=prompt("Ingrese nacionalidad");
 	}

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estado;
 	document.getElementById('Sueldo').value=sueldo;
 	document.getElementById('Legajo').value=legajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;
}

