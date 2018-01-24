function suma(x,y){
	var resultado;
	resultado=x+y;
	return resultado;
}
function resta(x,y){
	var resultado;
	resultado=x-y;
	return resultado;
}
function multi(x,y){
	var resultado;
	resultado=x*y;
	return resultado;
}
function division(x,y){
	var resultado;
	if(y==0){
		alert("No se puede dividir entre cero");
	}
	else{
	resultado=x/y;
	return resultado;
	}
	
}
opcion=prompt("Elige una opción: \n1.-Suma\n2.-Resta\n3.-Multi\n4.-Div")

x=Number(prompt("Ingresa el valor de x: "));
y=Number(prompt("Ingresa el valor de y: "));

if(opcion==1){
	alert("La suma de X y Y es: "+suma(x,y))
}
else if(opcion==2){
	alert("La resta de X y Y es: "+resta(x,y))
}
else if(opcion==3){
		alert("La multiplicación de X y Y es: "+multi(x,y))
}
else if(opcion==4){
		alert("La división de X entre Y es: "+division(x,y))

}
else{
	alert("Opción no válida!")
}
