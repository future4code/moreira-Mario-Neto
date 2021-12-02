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
