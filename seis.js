function mostrar()
{
	var hora;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:

			alert("es de mañana");
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:

			alert("es de tarde");
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:

			alert("es de noche");
			break;

		case 1:
		case 2:
		case 3:
		case 4:
		case 5:

			alert("a dormir");
			break;
	}
}