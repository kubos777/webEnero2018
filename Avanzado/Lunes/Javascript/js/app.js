/* Introducción a Javascript*/


/*Operadores aritméticos*/

var x=10;
var a=2;
y=3.5;
//console.log imprime en la consola del navegador
console.log("Operadores aritméticos: ")
console.log("La suma de x y y es:",x+y);
console.log("La resta de x y y es:",x-y);
console.log("La multiplicación de x y y es:",x*y);
console.log("La división de x y y es:",x/y);
console.log("El modulo de x/2 es: ",x%a);

/*Operadores de comparación*/
document.write("Operadores de comparación <br>");
document.write(1==true,"<br>"); //true
document.write(1!=true,"<br>"); //false
document.write(0===false,"<br>"); //true
document.write(true===true,"<br>"); //true
document.write(5>3,"<br>"); //true
document.write(5>=5,"<br>"); //true
document.write(1<10,"<br>"); //true
document.write(2<=2,"<br>"); //true

/*Operadores lógicos*/
document.write("Operadores lógicos <br><br>	");
//AND
//Ambas comparaciones deben cumplirse
document.write(1==true && 0==false,"<br>"); 
//OR
//Solo una de las comparaciones debe cumplirse
document.write(1==true || 0==false,"<br>");
//NOT
document.write(!true,"<br>");

document.write(!isNaN(x)?"Sí es un número":"No es un número");

//Cuadros de mensajes más comunes
//No podemos asignar el valor de un alert

//respuesta=alert("Hola a todos!")

//respuesta=confirm("Quieres proporcionar tu localización?")
//document.write("<br>",respuesta);
/*
edad=prompt("Ingresa tu edad: ","default");

respuesta=Number(edad)

if(respuesta>=18 && respuesta<=59){
alert("Pásale, eres mayor de edad!");
}
else if(respuesta>=60){
	alert("Estas viejo! :3")
}
else{
	alert("Estas chavo, no puedes entrar!")
}

document.write("<br>",respuesta)
*/

//Arreglos

var arreglo1=[20,25,13,2,56,4];
var arreglo2=[];
//Ingresar datos a un arreglo
arreglo2.push("Dos");
arreglo2.push("Cuatro");
arreglo2.push("Uno");
arreglo2.push("Tres");

console.log(arreglo1);
console.log(arreglo2);
//Impresión personalizada con el método join
console.log(arreglo1.join(","))
console.log(arreglo2.join("."))

//Eliminar datos de un arreglo
//El método pop quita el último elemento del arreglo
console.log(arreglo1.pop());
console.log(arreglo2.pop());
console.log(arreglo1);
console.log(arreglo2);
arreglo1.push(10);
//Longitud del arreglo
console.log("Tamaño del arreglo: ",arreglo2.length);
console.log("Tamaño del arreglo 2: ",arreglo1.length);

//Ordenar datos, por medio del método sort
var ordenados=arreglo1.sort()
console.log("Datos ordenados: ",ordenados)

var ordenados2=arreglo2.sort()

console.log("Datos ordenados 2: ",ordenados2)

//Me voltea los datos, es decir, del último al primero
var reversa=arreglo1.reverse();

console.log("Casi de mayor a menor: ", reversa)

//Accediendo a cada elemento de un arreglo

console.log(arreglo1);
console.log(arreglo2);

console.log("Posición 0,arreglo1: ",arreglo1[0]);
console.log("Posicion 0,arreglo2",arreglo2[0]);

//Ciclo FOR
//for(inicio;hasta donde;de cuanto en cuanto)
for(i=0;i<arreglo1.length;i++){
	document.write(arreglo1[i],"<br>");
}

//Ciclo WHILE
var contador=0;

while(contador<arreglo2.length){
	console.log(arreglo2[contador]);
	document.write("<br>",arreglo2[contador],"<br>");
	//contador=contador+1;
	contador++;
}


//Funciones

function sumar(x,y){
	var resultado;
	resultado=x+y;
	return resultado;
}
//Mandar a llamar a la función
console.log(sumar(5,25));

