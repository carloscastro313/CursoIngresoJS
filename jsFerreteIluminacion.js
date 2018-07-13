/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparitas;
 	var select;
 	var impuesto;
 	var descuento;

 	lamparitas=document.getElementById('Cantidad').value;
 	select=document.getElementById('Marca').value;

 	lamparitas=parseInt(lamparitas);
 	
 	if (lamparitas>=6) {

 		descuento=(lamparitas*35)*0.50;
 		
 	}else{
 		if (lamparitas==5 && select=="ArgentinaLuz") {
 			
 			descuento=(lamparitas*35)*0.60;
 			
 		}else{
 			if (lamparitas==5&& select!="ArgentinaLuz") {
 				
 				descuento=(lamparitas*35)*0.70;
 				
 			}else{
 				if (lamparitas==4&&(select=="ArgentinaLuz"||select=="FelipeLamparas")) {
 					
 					descuento=(lamparitas*35)*0.75;
 					
 				}else{
 					if (lamparitas==4&&(select!="ArgentinaLuz"||select!="FelipeLamparas")) {
 						
 						descuento=(lamparitas*35)*0.80;
 						
 					}else{
 						if (lamparitas==3&&select=="ArgentinaLuz") {
 							
 							descuento=(lamparitas*35)*0.85;
 							
 						}else{
 							if (lamparitas==3&&select=="FelipeLamparas") {
 								
 								descuento=(lamparitas*35)*0.90;
 								
 							}else{
 								if (lamparitas==3&&(select!="ArgentinaLuz"||select!="FelipeLamparas")) {
									
									descuento=(lamparitas*35)*0.95;
 									
 								}
 							}
 						}
 					}
 				}
 			}


 		}


 	}
 	if (descuento>=120) {
 		
 		impuesto=descuento*0.10;
 		
 		alert("Usted pago "+impuesto+"de IIBB.");
 		document.getElementById('precioDescuento').value=descuento;

 	}else{

 		document.getElementById('precioDescuento').value=descuento;

 	}
}
