/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var porcent;
    var resultado;

    sueldo=document.getElementById('sueldo').value;
	
	porcent=parseInt(sueldo)*0.10;
    resultado=parseInt(sueldo)+parseInt(porcent);

	document.getElementById('resultado').value=resultado;
}
