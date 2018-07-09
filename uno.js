
function mostrar()
{
     var ancho;
     var largo;
     var perimetro;

     ancho=prompt("Ingrese el ancho");
     largo=prompt("Ingrese el largo");

     perimetro=parseInt(largo)*2+parseInt(ancho)*2
     alert("El perimetro es: "+perimetro)
}
