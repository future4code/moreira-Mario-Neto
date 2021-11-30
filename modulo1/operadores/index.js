/* Exercícios de interpretação de código */

// Exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. 'boolean'

// Exercícios 2 e 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/** 
    Por exemplo, se primeiroNumero é 3 e segundoNumero é 4, então, 
    do jeito que está, ocorrerá concatenação de duas strings e o 
    resultado impresso será "34". Mas, se for feita a conversão 
    das strings retornadas pelo método `prompt` para números, 
    então o resultado será 7 e terá o tipo esperado, number:

    const soma = Number(primeiroNumero) + Number(segundoNumero);
*/ 

/* Exercícios de escrita de código */