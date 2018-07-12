function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if (edad>=13) {
		if (edad<=17) {
		alert("Usted es adolescente");
		}
	}


}//FIN DE LA FUNCIÓN