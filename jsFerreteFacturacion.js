/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var p1;
	var p2;
	var p3;
	var resultado;

	p1=document.getElementById('PrecioUno').value;
	p2=document.getElementById('PrecioDos').value;
	p3=document.getElementById('PrecioTres').value;

	p1=parseInt(p1);
	p2=parseInt(p2);
	p3=parseInt(p3);

	resultado=p1+p2+p3;

	alert("El precio total es $"+resultado);

}
function Promedio () 
{
	var p1;
	var p2;
	var p3;
	var resultado;

	p1=document.getElementById('PrecioUno').value;
	p2=document.getElementById('PrecioDos').value;
	p3=document.getElementById('PrecioTres').value;

	p1=parseInt(p1);
	p2=parseInt(p2);
	p3=parseInt(p3);
	resultado=(p1+p2+p3)/3;

	alert("El premedio es $"+resultado);var p1;
	
}
function PrecioFinal () 
{
	var p1;
	var p2;
	var p3;
	var iva;
	var resultado;

	p1=document.getElementById('PrecioUno').value;
	p2=document.getElementById('PrecioDos').value;
	p3=document.getElementById('PrecioTres').value;

	p1=parseInt(p1);
	p2=parseInt(p2);
	p3=parseInt(p3);

	iva=(p1+p2+p3)*0.21;
	resultado=(p1+p2+p3)+iva

	alert("El precio con el iva es $"+resultado);
}