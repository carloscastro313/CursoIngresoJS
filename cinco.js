function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese planeta");

	switch(planeta)
	{
		case "tierra":

			alert("Aca vivimos");
			break;

		case "mercurio":
		case "venus":
		 	
		 	alert("Aca hace mas calor");
		 	break;

		case "marte":
		case "jupite":
		case "nepturno":
		case "saturno":
		case "urano":

			alert("Aca hace mas frio");
			break;

		default:

			alert("Este planeta no es valido");
			break;
	}
}
