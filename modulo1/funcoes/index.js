/* Exercícios de interpretação de código */

// Exercício 1

function minhaFuncao(variavel) {
  return variavel * 5;
}

console.log(minhaFuncao(2)); // 10
console.log(minhaFuncao(10)); // 50

/**
 * Se os dois console.log fossem retirados,
 * nada seria impresso.
 */

// Exercício 2

let textoDoUsuario = prompt("Insira um texto");

/**
 * outraFuncao retorna um boolean(includes),
 * resultado da avaliação da ocorrência da
 * string "cenoura" na string; a função também
 * converte letras maiúsculas para minúsculas.
 *
 * @param {string} texto
 * @returns {boolean}
 *
 * @example
 *
 *      outraFuncao('Eu gosto de cenoura') true
 *      outraFuncao('CENOURA é bom pra vista') true
 *      outraFuncao('Cenouras crescem na terra') true
 *
 */

const outraFuncao = function (texto) {
  return texto.toLowerCase().includes("cenoura");
};

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);

/* Exercícios de escrita de código */

// Exercício 1

function myInfo() {
  console.log("Eu sou Mario, tenho 30 anos, moro em Resende e sou estudante.");
}

function makeInfo(nome, idade, cidade, profissao) {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}

console.log(makeInfo("Laís", 23, "São Paulo", "instrutora"));

// Exercício 2

function sum(num1, num2) {
  return num1 + num2;
}

function greaterThan(num1, num2) {
  return num1 >= num2;
}

function isEven(num) {
  return num % 2 == 0;
}

function lengthUpperCase(mensagem) {
  console.log(mensagem.length, mensagem.toUpperCase());
}

console.log(sum(11, 13));
console.log(greaterThan(11, 13));
console.log(isEven(13));
lengthUpperCase("Essa string contém 33 caracteres.");

// Exercício 3

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

const numX = Number(prompt("Insira um número"));
const numY = Number(prompt("Insira outro número"));

console.log(`
    Números inseridos: ${numX} e ${numY}
    Soma: ${sum(numX, numY)}
    Diferença: ${subtract(numX, numY)}
    Multiplicação: ${multiply(numX, numY)}
    Divisão: ${divide(numX, numY)}
`);

/* Desafios */

// Exercício 1

const log = (msg) => console.log(msg);
const logSum = (a, b) => log(a + b);

logSum(2, 3);

// Exercício 2

function hypotenuse(legA, legB) {
  return Math.hypot(legA, legB);
}

log(hypotenuse(2, 5));
