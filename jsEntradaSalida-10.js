/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var porcent;
    var resultado;

    importe=document.getElementById('importe').value;
	
	porcent=parseInt(importe)*0.25;
    resultado=parseInt(importe)-parseInt(porcent);

	document.getElementById('resultado').value=resultado;
}
