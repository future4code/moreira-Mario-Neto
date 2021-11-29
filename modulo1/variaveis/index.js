/* Exercício de interpretação 1 */

let a = 10 // Declaração de variável usando keyword `let`, nome `a` e atribuição do valor `10` (number)
let b = 10 // Declaração de variável `b` e atribuição do valor `10` (number)


console.log(b) // Invocação do método `log` do objeto `console` tendo como argumento a variável b (10)
// log: 10

b = 5 // Reatribuição de variável `b`: novo valor `5` (number)
console.log(a, b) // Invocação do método `log` do objeto `console`; argumentos: a (10) b (5)
 // log: 10 5

/* Exercício de interpretação 2 */

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // 10 10 12

/* Exercício de interpretação 3 */

let p = prompt("Quantas horas você trabalha por dia?") // workday
let t = prompt("Quanto você recebe por dia?") // hourlyWage
alert(`Voce recebe ${t/p} por hora`)

/* Exercício de escrita de código 1 */

let aName;
let anAge;

console.log(typeof aName, typeof anAge); // até aqui, as variáveis foram somente inicializadas, nenhum tipo/valor a elas foi atribuído

aName = prompt("What's your name?");
anAge = prompt("How old are you?");

console.log(typeof aName, typeof anAge); // Dessa vez, atribuímos os retornos do método `prompt` com os valores (string).
console.log(`Olá ${aName}, você tem ${anAge} anos.`);

/* Exercício de escrita de código 2 */ 

let warmWeather = prompt("Faz calor hoje onde você mora?");
let whiteTShirt = prompt("Está usando camisa branca?");
let sunscreen = prompt("Tem protetor solar?");

console.log("Faz calor hoje onde você mora?", warmWeather);
console.log("Está usando camisa branca?", whiteTShirt);
console.log("Tem protetor solar?", sunscreen);

/* Exercício de escrita de código 3 */

let a = 10;
let b = 25;
let c = a;

a = b;
b = c;

console.log(a, b);

/* Desafio */

const dogsAge = Number(prompt('Qual é a idade do seu cãozinho?')) * 16 + 31; // https://www.bbc.com/future/article/20200106-how-to-calculate-your-dogs-real-age
const yourAge = Number(prompt('Qual é a sua idade?'));

console.log(`1. O primeiro número somado ao segundo número resulta em: ${dogsAge + yourAge}.`);
console.log(`2. O primeiro número multiplicado pelo segundo número resulta em: ${dogsAge * yourAge}.`);