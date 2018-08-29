//let arreglo = [ 2, 3, "a", 6, "hola", 2];

//arreglo[7]=100;

//console.log(arreglo.length); 

//for (let i=0;i<6;i++){
//console.log(arreglo[i])
//}

// let N1=prompt("Nombre: ");
// let E1=prompt("Edad: ");
// let C1=prompt("Correo electronico:");

// let arreglo=[N1, E1, C1];

// for (let i=0; i<3; i++){
//     console.log(arreglo[i])
// }

// let arreglo=[]

// arreglo[0]=prompt("nombre")
// arreglo[1]=prompt("edad")
// arreglo[2]=prompt("e-mail")

// for (let i=0; i<3; i++){
//     console.log(arreglo[i])
// }

// let letra="a";
// console.log(letra.toUpperCase())
// console.log(letra.toLowerCase())

let arreglo=prompt("Introduce un texto: ")
let resultado=""

for (let i=0; i<arreglo.length; i++){
    if (i%2==0){
        resultado=resultado+arreglo[i].toUpperCase()
        } else {resultado = resultado + arreglo[i].toLowerCase()
        }
}
console.log(resultado)