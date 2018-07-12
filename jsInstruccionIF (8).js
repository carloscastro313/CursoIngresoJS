/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", NO HACER NADA, 
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 
'Es soltero y no es menor.'*/
function mostrar()
{
//tomo la edad  
		var edad;
		var s;

		edad=document.getElementById('edad').value;
		s=document.getElementById('estadoCivil').value;

		edad=parseInt(edad);
		
		if (edad>=18 && s=="Soltero") {
			
			alert("Es soltero y no es menor");
		
		}
	


}//FIN DE LA FUNCIÓN