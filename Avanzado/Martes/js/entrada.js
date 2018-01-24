var texto=document.getElementById("miinput").value;

document.getElementById("boton").onclick=function(){
	texto=document.getElementById("miinput").value;

	document.getElementById("primerdiv").innerHTML=texto;
}