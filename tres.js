function mostrar()
{
	var precio;
	var descuento;
	var iva;
	var final;

	precio=prompt("ingrese el precio");
	descuento=prompt("ingrese el descuento");
    
	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=precio*descuento/100;
	final=precio-descuento;
	iva=final*0.21;
	
	alert("El descuento es "+descuento+", el precio con descuento es "+final+" y el iva es "+iva);

 	final=iva+final;

 	document.getElementById('elPrecioFinal').value=final;
}
