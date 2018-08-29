// const cuadrado = (num) => {
//     return num * num
// }

// console.log(cuadrado(5));

// const areacuadrado = (lado) => {
//     let area = lado*lado
//     return area
// }
// console.log(areacuadrado(4));


triangulo = prompt("¿Que tipo de triangulo? ")

 const area = (triangulo) => {
    if (triangulo == "rectangulo") {
        let b = prompt ("base")
        let h = prompt ("altura")
        area1 = b*h*1/2
        return area1
    } else if (triangulo == "isoseles") {
        let b = prompt ("base")
        area1 = b*b*1/2
        return area1
    } else if (triangulo == "equilatero"){
        let b = prompt ("lado")
        area1 = (1/2)*(b)*Math.sqrt((b*b-(b*b*(1/4))))
        return area1
    } else{console.log("No valido")}
 }
console.log(area(triangulo));
 

