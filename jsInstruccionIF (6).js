function mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;

	if (edad>=18) {
		alert("Mayor de edad");
	}else if (edad<=12) {
		alert("Nino");
	}else{
		alert("adolescente");
	}


}//FIN DE LA FUNCIÓN