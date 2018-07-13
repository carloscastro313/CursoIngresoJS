function mostrar()
{
	var dia;

	dia=prompt("Ingrese dia");

	if (dia=="sabado"||dia=="domingo") {
		alert("buen finde")
	}else{
		if (dia=="lunes"||dia=="martes"||dia=="miercoles"||dia=="jueves"||dia=="viernes") {
			alert("a trabajar");
		}else{
			alert("dia no valido");
		}
	}
}
