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

/* Exercícios de escrita de código */

// Exercício 1

const pets = Math.abs(Number(prompt("Quantos bichos de estimação você tem?")));
const petNames = [];

if (pets > 0) {
  for (let i = 1; i <= pets; i++) {
    petNames.push(prompt(`Qual é o nome do #${i} pet?`));
  }
  console.log(petNames);
} else {
  console.log("Que pena! Você pode adotar um pet!");
}

// Exercício 2

let arrayOriginal = [];

for (let i = 0; i < 10; i++) {
  arrayOriginal.push(Math.floor(Math.random() * 100));
  console.log(arrayOriginal[i]);
}

for (let i = 0; i < 10; i++) {
  console.log(arrayOriginal[i] / 10);
}

let evens = [];
for (let i = 0; i < 10; i++) {
  if (arrayOriginal[i] % 2 == 0) {
    evens.push(arrayOriginal[i]);
  }
}

console.log(evens);

let indexedStrings = [];
for (let i = 0; i < arrayOriginal.length; i++) {
  indexedStrings.push(`O elemento index ${i} é: ${arrayOriginal[i]}`);
}

console.log(indexedStrings);

let sortedOriginalArray = [...arrayOriginal];

for (let i = sortedOriginalArray.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    const [curr, next] = sortedOriginalArray.slice(j, j + 2);
    if (curr > next) {
      sortedOriginalArray[j] = next;
      sortedOriginalArray[j + 1] = curr;
    }
  }
}

const smallest = sortedOriginalArray[0];
const greatest = sortedOriginalArray[sortedOriginalArray.length - 1];

console.log(`O maior número é ${greatest} e o menor é ${smallest}`);
