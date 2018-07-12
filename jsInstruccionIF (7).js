function mostrar()
{
//tomo la edad  
	var edad;
	var s;

	edad=document.getElementById('edad').value;
	s= document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	if (edad <18 && s !="Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
	}
	


}//FIN DE LA FUNCIÓN