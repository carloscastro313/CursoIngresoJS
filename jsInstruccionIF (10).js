function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var r;

	r=Math.floor((Math.random()*10)+1);

	if (r>=9){
		alert(+r+" EXCELENTE");
			}
	else 	{
		if (r>=4){ 
				alert(+r+" APROBO")
				}
			else{
				alert(+r+" Vamos la proxima se puede");
				 }
			}	

}//FIN DE LA FUNCIÓN