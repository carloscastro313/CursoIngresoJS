/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	 var n1;
     var n2;
     var suma;

     n1=document.getElementById('numeroUno').value;
     n2=document.getElementById('numeroDos').value;

     suma=parseInt(n1) + parseInt(n2);
     alert("La suma es "+suma);

}

function restar()
{
	 var n1;
     var n2;
     var resta;

     n1=document.getElementById('numeroUno').value;
     n2=document.getElementById('numeroDos').value;

     resta=parseInt(n1) - parseInt(n2);
     alert("La resta es "+resta);
}

function multiplicar()
{ 
	 var n1;
     var n2;
     var por;

     n1=document.getElementById('numeroUno').value;
     n2=document.getElementById('numeroDos').value;

     por=parseInt(n1) * parseInt(n2);
     alert("La multiplicacion es "+por);
}

function dividir()
{
	 var n1;
     var n2;
     var div;

     n1=document.getElementById('numeroUno').value;
     n2=document.getElementById('numeroDos').value;

     div=parseInt(n1) / parseInt(n2);
     alert("La division es "+div);
}

