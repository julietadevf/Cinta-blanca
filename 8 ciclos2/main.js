// for (let i = 100; i > 0; i--){
//     console.log(i)
// }

// let Fact = Number(prompt("Ingresa un numero del que quieras obtener factorial: "));
// let factorial=1

// for (let i = 1; i <=Fact; i++) {
//     factorial*=i
// }
// console.log(factorial)

// Fact    factorial   i
// 4           1       1
//             1       2
//             2       3
//             6       4
//             24

// let x = 10;
// let y = 10;

// while (x<10) {
//     console.log(x);
//     x += 2
// }

// do {
//     console.log(y)
//     y +=2      
// } while (y < 10)

// let contraseña = "gatito"
// let contraseñaU=""

// while (contraseña != contraseñaU) {
//     contraseñaU = prompt("Ingresa la contraseña: ")
// }

let password = "gatito"
let usuario = prompt("Ingresa la contraseña: ")

do{
    usuario = prompt ("Ingresa la contraseña")
} while (usuario != password)
if (usuario === password) {
    alert("Bienvenido")
}