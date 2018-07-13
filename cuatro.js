function mostrar()
{
	var n1;
	var n2;
	var r;

	n1=prompt("Primer numero");
	n2=prompt("Segundo numero");

	n1=parseInt(n1);
	n2=parseInt(n2);

	if (n1==n2) {
		
		r=n1*n2;
	
	}else{
		if (n1>n2) {
			
			r=n1-n2;
		
		}else{
			if (n2>n1) {
				
				r=n1+n2;

				if (r>10) {

					alert("la suma es "+r+ " y supero el 10");
				}else{
					alert(r);
				}
			}
		}
	}
	
}
