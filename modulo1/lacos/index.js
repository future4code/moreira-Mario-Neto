/* Exercícios de interpretação de código */

// Exercício 1

let valor = 0;
for (let i = 0; i < 5; i++) {
  valor += i;
}
console.log(valor);

/**
 * A cada rodada do laço for, valor é
 * incrementada segundo o incremento de i:
 * valor + i => 0 + 1; 1 + 2; 3 + 3; 6 + 4;
 * fim do laço, pois a condição de parada
 * é atingida: i ser igual a 5; 10 é
 * impresso no console.
 */

// Exercício 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero);
  }
}

/**
 * Será impresso no console:
 * 19
 * 21
 * 23
 * 25
 * 27
 * 30
 *
 * Sim, seria suficiente, mas precisaria
 * ser complementado com um counter declarado
 * em escopo global. Este precisaria ser
 * incrementado (counter += 1) e, então, usado
 * para indexar o array (lista[counter]).
 */

// Exercício 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
let quantidadeAtual = 0;
while (quantidadeAtual < quantidadeTotal) {
  let linha = "";
  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
    linha += "*";
  }
  console.log(linha);
  quantidadeAtual++;
}

/**
 * Seria impresso, se o usuário digitasse 4:
 *
 * *
 * **
 * ***
 * ****
 */
