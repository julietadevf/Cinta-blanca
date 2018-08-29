let btnPiedra = document.getElementById("btnPiedra")
let btnPapel = document.getElementById("btnPapel")
let btnTijera = document.getElementById("btnTijera")
let btnResultado = document.getElementById("Resultado")

// const saludo=()=>{
//     console.log("hola");
// }
// btnPiedra.addEventListener("click",saludo)
// btnPapel.addEventListener("click")

const piedra = () =>{
    let usuario = "piedra"
    let compu = Math.floor(Math.random()*3)+1

    if (compu===1) {
        compu = "piedra"
        Resultado.innerHTML = `La computadora elige ${compu}, es un empate`
    } else if (compu===2) {
        compu = "papel"
        Resultado.innerHTML = `La computadora elige ${compu}, gana la compu`
    } else {
        compu = "tijera"
        Resultado.innerHTML = `La computadora elige ${compu}, ganaste!`
    }
}
btnPiedra.addEventListener("click",piedra)