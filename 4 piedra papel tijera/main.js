// //Declaración de variable
// let=variable;

// //Asignación de variable
// variable=20;

// //valores en variable: 
// 	numero, string, booleano

// 	Estructuras de control
//
let J1Nombre = prompt("Jugador 1. Nombre:")
let J2Nombre = prompt("Jugador 2. Nombre:")

let J1 = prompt(J1Nombre + " Elige a para piedra, b para papel, c para tijera")
	if ( J1!="a" && J1!="b" && J1!="c")
	{
	alert(J1Nombre+" Elegiste una opción no incluida");
	J1 = prompt(J1Nombre + " Elige a para piedra, b para papel, c para tijera")
	}
let J2 = prompt(J2Nombre + " Elige a para piedra, b para papel, c para tijera")
	if ( J2!="a"&& J2!="b" &&J2!="c")
	{
	alert(J2Nombre+" Elegiste una opción no incluida");
	J2 = prompt(J2Nombre + " Elige a para piedra, b para papel, c para tijera")
	}

if(J1==J2)
	{alert("EMPATE")
}	
// else if(J1=="a" && J2=="b" || (J1=="b" && J2=="c") || (J1=="c" && J2=="a") ){alert("GANASTE "+ J2Nombre)}
// else{alert("GANASTE "+J1Nombre)}
else if (J1=="a" && J2=="b")
	{alert("Ganaste "+J2Nombre+" porque papel le gana a piedra")
	}
else if (J1=="a" && J2=="c")
	{alert("Ganaste "+J1Nombre+" porque piedra le gana a tijera")
	}
else if ( J1=="b" && J2=="a")
	{alert("Ganaste "+J1Nombre+" porque papel le gana a piedra")
	}
else if (J1=="b" && J2=="c")
	{alert("Ganaste "+J2Nombre+" porque piedra le gana a tijera")
	}
else if (J1=="c" && J2=="a")
	{alert("Ganaste "+J2Nombre+" porque tijera le gana a papel")
	}
else if (J1=="c" && J2=="b")
	{alert("Ganaste "+J1Nombre+" porque tijera le gana a papel")
	}
else {alert("Ups! Alguien escogio otra opción no incluida, empiecen de nuevo")
	}