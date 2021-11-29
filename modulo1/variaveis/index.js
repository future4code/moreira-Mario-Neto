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

console.log(a, b, c) // 10 10 10

/* Exercício de interpretação 3 */

let p = prompt("Quantas horas você trabalha por dia?") // workday
let t = prompt("Quanto você recebe por dia?") // hourlyWage
alert(`Voce recebe ${t/p} por hora`)
