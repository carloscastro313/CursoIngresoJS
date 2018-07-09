function mostrar()
{
    var precio;
    var final;
    var porcent;

    precio=prompt("Ingrese precio");
    descuento=prompt("Ingrese descuento");

    porcent=parseInt(descuento)*parseInt(precio)/100;
    final=parseInt(precio)-parseInt(porcent)

    document.getElementById('elPrecioFinal').value=final;
}
