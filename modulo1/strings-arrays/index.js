/* Exercícios de interpretação de código */

// Exercício 1

let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9

// Exercício 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // 'SUBI NUM ÔNIBUS EM MIRROCOS' 27

/* Exercícios de escrita de código */

// Exercício 1

const nomeDoUsuario = prompt('Qual é seu nome?')
const emailDoUsuario = prompt('Qual é seu e-mail?')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Exercício 2

let comidas = ['espinafre', 'manga', 'pão', 'queijo', 'açaí']

console.log(comidas)

console.log('Essas são as minhas comidas preferidas', '\n' + comidas[0] + '\n' + comidas[1] + '\n' + comidas[2] + '\n' + comidas[3] + '\n' + comidas[4])

let comidaDoUsuario = prompt('Qual é a sua comida preferida?')

comidas[1] = comidaDoUsuario

console.log('Essas são as minhas comidas preferidas', '\n' + comidas[0] + '\n' + comidas[1] + '\n' + comidas[2] + '\n' + comidas[3] + '\n' + comidas[4])

// Exercício 3

let listaDeTarefas = []

listaDeTarefas.push(prompt('Qual é a primeira tarefa de hoje?'))
listaDeTarefas.push(prompt('Qual é a segunda tarefa de hoje?'))
listaDeTarefas.push(prompt('Qual é a terceira tarefa de hoje?'))

console.log(listaDeTarefas)

listaDeTarefas.splice(Number(prompt('Qual tarefa (0, 1, 2) deseja apagar?')), 1)

console.log(listaDeTarefas)
