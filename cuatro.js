function mostrar()
{
	var n1;
	var n2;
	var r;

	n1=prompt("Ingrese primer numero");
	n2=prompt("Ingrese segundo numero");

	n1=parseInt(n1);
	n2=parseInt(n2);

	if (n1==n2) {
		
		alert(n1+" "+n2);

	}else{
		if (n1>n2) {
			
			r=n1/n2;

			alert("la division es "+r);

		}else{
			if (n2>n1) {
				
				r=n1+n2;
				
				if (r<50) {
					
					alert("La suma es "+r+" y es menor a 50");
				
				}else{
					
					alert(r);
				}
			}
		}
	}
}
