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

// Exercício 1

const age = Number(prompt('Quantos anos você tem?'));
const bFAge = Number(prompt('Quantos anos tem seu melhor amigo?'));

console.log(`Sua idade é maior do que a do seu melhor amigo? ${age > bFAge}`);
console.log(age - bFAge);

// Exercício 2

const even = Number(prompt('Insira um número par.'));

console.log(even % 2);

/** 
 * O retorno dos testes com os outros números pares 
 * também foi 0, ou seja, são divisíveis por 2. Logo, 
 * números ímpares retornarão um valor diferente de 0.
*/

// Exercício 3

const userAge = Number(prompt('Qual é a sua idade?'));
const userAgeMonths = userAge * 12;
const userAgeDays = userAge * 365;
const userAgeHours = userAgeDays * 24;

console.log(userAgeMonths + ' meses');
console.log(userAgeDays + ' dias');
console.log(userAgeHours + ' horas');

// Exercício 4

const num1 = Number(prompt('Digite um número'));
const num2 = Number(prompt('Agora, outro número.'));

console.log(`O primeiro número é maior que o segundo? ${num1 > num2}`);
console.log(`O primeiro número é igual ao segundo? ${num1 == num2}`);
console.log(`O primeiro número é divisível pelo segundo? ${num1 % num2 == 0}`);
console.log(`O segundo número é divisível pelo primeiro? ${num2 % num1 == 0}`);