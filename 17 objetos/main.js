// let alumno = {
//     nombre:"Julieta",
//     edad:30,
//     email:"julieta@itumi.com.mx",
// }

// console.log(alumno.edad);

// let personaje = {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.co/api/planets/1/",
// 	"films": [
// 		"https://swapi.co/api/films/2/",
// 		"https://swapi.co/api/films/6/",
// 		"https://swapi.co/api/films/3/",
// 		"https://swapi.co/api/films/1/",
// 		"https://swapi.co/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.co/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.co/api/vehicles/14/",
// 		"https://swapi.co/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.co/api/starships/12/",
// 		"https://swapi.co/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.co/api/people/1/"
// }

let btnenviar = document.getElementById("enviar");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let email = document.getElementById("email");
let pizza = document.getElementById("pizza");
let datos = {}

const enviar = () => {
    respuesta.style.display = "flex";
    formulario.style.display = "none";
    
    let datos = {
        nombre: nombre.value,
        edad: edad.value,
        email: email.value,
        pizza: pizza.checked,
    }   
    
    rnombre.innerHTML = `Nombre: ${datos.nombre}`
    redad.innerHTML = `Edad: ${datos.edad}`
    remail.innerHTML = `Email: ${datos.email}`
    rpizza.innerHTML = `Piña: ${datos.pizza}`
}
 
btnenviar.addEventListener("click", enviar)