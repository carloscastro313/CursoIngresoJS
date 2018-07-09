/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	alambre=((largo+ancho)*2)*3;

	alert("La cantidad de alambre es "+alambre+"M");
}
function Circulo () 
{
	var radio;
	var alambre;

	radio=document.getElementById('Radio').value;

	radio=parseInt(radio);
	alambre=(3.14*2*radio)*3;

	alert("La cantidad de alambre es "+alambre+"M");
}
function Materiales () 
{
	var largo;
	var ancho;
	var cal;
	var cemento;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	cal=(largo*ancho)*3;
	cemento=(largo*ancho)*2;

	alert("La cantidad de bolsas de cemento es "+cemento+" y de cal "+cal);

}