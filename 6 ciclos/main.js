// let i;

// for (i=1;i<101;i++) {  // i=i+1 es lo mismo que i++
//     if (i%2==0) {
//         console.log (`este número es par: ${i}`)
//     } else { console.log (`este número es impar: ${i}`)
//     }
// }

let i;
for (i=0;i<101;i++) {
    if (i%3==0 && i%5==0) {
        console.log (`FizzBuzz: ${i}`)
    } else if (i%5==0){ console.log (`Buzz: ${i}`)
    } else if (i%3==0){console.log (`Fizz: ${i}`)
    } else{console.log(`${i}`)
    }
}
