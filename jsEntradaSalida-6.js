/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

