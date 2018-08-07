function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese precio");
	descuento=prompt("Ingrese descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	preciofinal=precio-(precio*descuento/100);

	document.getElementById('elPrecioFinal').value=preciofinal;
}

