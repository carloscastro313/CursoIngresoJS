function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":

			alert("tiene 31 días");
			break;

		case "Abril":
		case "Junio":
		case "septiembre":
		case "noviembre":

			alert("tiene 30 días");
			break;

	 	default:

	 		alert("tiene 29 días");

	}
	



}//FIN DE LA FUNCIÓN