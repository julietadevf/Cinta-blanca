let btnsquirtle = document.getElementById("squirtle")
let btnbulbasaur = document.getElementById("bulbasaur")
let btncharmander = document.getElementById("charmander")
let btnResultado = document.getElementById("Resultado")
let btndivresultado = document.getElementById("divresultado")
let divcompu = document.getElementById("divcompu")
let sqcompu = document.getElementById("sqcompu")
let blcompu = document.getElementById("blcompu")
let chcompu = document.getElementById("chcompu")



const charmander = () =>{
    Resultado.style.display = "flex";
    divresultado.style.display = "none";
    divcompu.style.display = "none";

    let compu = Math.floor(Math.random()*3)+1;


    if (compu===1) {
        compu = "Squirtle"
        Resultado.innerHTML = `Elegiste Charmander y la computadora eligió ${compu}, pierdes :(`
        sqcompu.style.display = "flex"
        blcompu.style.display = "none"
        chcompu.style.display = "none"    
    } else if (compu===2){
        compu = "Bulbasaur"
        Resultado.innerHTML = `Elegiste Charmander y la computadora eligió ${compu}, ¡GANASTE!`
        sqcompu.style.display = "none"
        blcompu.style.display = "flex"
        chcompu.style.display = "none"         
   }else {
       compu = "Charmander"
       Resultado.innerHTML = `Elegiste Charmander y la computadora eligió ${compu}, es un empate`
       sqcompu.style.display = "none"
       blcompu.style.display = "none"
       chcompu.style.display = "flex"         
    }
}
btncharmander.addEventListener("click", charmander)

const bulbasaur = () =>{
     Resultado.style.display = "flex";
     divresultado.style.display = "none";
     divcompu.style.display = "none";

     let compu = Math.floor(Math.random()*3)+1

     if (compu===1) {
         compu = "Squirtle"
         Resultado.innerHTML = `Elegiste Bulbasaur y la computadora eligió ${compu}, ¡GANASTE!`
         sqcompu.style.display = "flex"
         blcompu.style.display = "none"
         chcompu.style.display = "none"         
     } else if (compu===2){
         compu = "Bulbasaur"
         Resultado.innerHTML = `Elegiste Bulbasaur y la computadora eligió ${compu}, es un empate`
         sqcompu.style.display = "none"
         blcompu.style.display = "flex"
         chcompu.style.display = "none"         
    }else {
        compu = "Charmander"
        Resultado.innerHTML = `Elegiste Bulbasaur y la computadora eligió ${compu}, pierdes :( `
        sqcompu.style.display = "none"
        blcompu.style.display = "none"
        chcompu.style.display = "flex"         
     }
}
btnbulbasaur.addEventListener("click", bulbasaur)

const squirtle = () =>{
    Resultado.style.display = "flex";
    divresultado.style.display = "none";
    divcompu.style.display = "none"

    let compu = Math.floor(Math.random()*3)+1

    if (compu===1) {
        compu = "Squirtle"
        Resultado.innerHTML = `Elegiste a Squirtle y la computadora eligió ${compu}, es un empate`
        sqcompu.style.display = "flex"
        blcompu.style.display = "none"
        chcompu.style.display = "none"
       
    } else if (compu===2) {
        compu = "Bulbasaur"
        Resultado.innerHTML = `Elegiste a Squirtle y la computadora elige ${compu}, pierdes :(`
        sqcompu.style.display = "none"
        blcompu.style.display = "flex"
        chcompu.style.display = "none"
    } else {
        compu = "Charmander"
        Resultado.innerHTML = `Elegiste a Squirtle y la computadora elige ${compu}, ¡GANASTE!`
        sqcompu.style.display = "none"
        blcompu.style.display = "none"
        chcompu.style.display = "flex"
    }
}
btnsquirtle.addEventListener("click",squirtle)