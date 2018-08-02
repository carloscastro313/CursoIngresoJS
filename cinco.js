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
		case "neptuno":
		case "saturno":
		case "jupiter":
		case "pluton":

			alert("Aca hace mas frio");
			break;

		default:

			alert("Planeta invalido");
			break;
	}

	

}
