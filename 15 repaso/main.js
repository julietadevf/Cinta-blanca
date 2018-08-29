// let arreglo = ["altura", "latitud", "longitud",2,5,3,7,"xd"]

// const coordenadas = (arr) =>{
//     let posicion = [];
//     posicion[0]=arr[1];
//     posicion[1]=arr[2];
//     return posicion
// }
// console.log(coordenadas(arreglo));
//-------------------------------------------------------------------------------------------
// let btn = document.getElementById('btn')
// let marcadorUser = document.getElementById('user')
// let marcadorCPU = document.getElementById('CPU')

// let userWins = 0;
// let compuWins = 0;

// let test = true

// const contador =() =>{
//     if (test===true){
//         userWins += 1
//         marcadorUser.innerHTML = userWins;
//     } else{
//         compuWins +=1
//         marcadorCPU.innerHTML = compuWins;
//     }
// }

// btn.addEventListener("click",contador)

// //-----------------------------------------------------

// let frutas = ["naranja", "mango", "manzana"]

// frutas.push("uva")

// console.log(frutas);

// frutas.splice(2,1)
// console.log(frutas)

// let extracto = frutas.slice(0,1)
// console.log(extracto)

let nombre = document.getElementById('nombre')
let btn = document.getElementById('btn')
let display = document.getElementById('display')

console.log(nombre);

btn.addEventListener("click", ()=>{
    display.innerHTML = nombre.value
})