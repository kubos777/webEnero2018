/*Programación orientada a objetos*/
//De esta forma declaramos una clase
/*function Persona(edad){
	//Atributo
	this.edad=edad;
	//Método
	this.saludar=function(){ //Función anónima
		alert("Hola a todxs, esto es POO en JS");
	}
}

var Jorge= new Persona(22);
//Estamos accediendo a los atributos del objeto
document.write("Tu edad es: "+Jorge.edad)

Jorge.saludar();
*/

function Clase(){
	this.color="color";
	this.nombre="nombre";

	this.saludar=function(){
		alert("Hola "+this.nombre+"tu color favorito es: "+this.color)		
	}
}

var alguien= new Clase();
	alguien.color="Azul";
	alguien.nombre="Jorge";

document.write("Hola "+alguien.nombre+"tu color fav es: "+alguien.color)
alguien.saludar();


