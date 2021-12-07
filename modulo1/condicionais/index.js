/* Exercícios de interpretação de código */

// Exercício 1

/* const respostaDoUsuario = prompt("Digite o número que você quer testar");
const numero = Number(respostaDoUsuario);

if (numero % 2 === 0) {
  console.log("Passou no teste.");
} else {
  console.log("Não passou no teste.");
} */

/**
 * O código acima avalia se um número é par ou não através do resto da
 * divisão do número por 2. Por exemplo, 1282 % 2 == 0 seria true, e no
 * console seria impresso 'Passou no teste'. Todos os demais números,
 * ou seja, os números ímpares teriam restos diferentes de 0 se divididos
 * por 2 e no console seria impresso 'Não passou no teste'.
 */

// Exercício 2

let fruta = prompt("Escolha uma fruta");
let preco;
switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5;
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

/**
 * O código desenvolvido atribui preço específico a determinada
 * produto, a princípio frutas. Sendo assim, se a fruta for 'Maçã'
 * o `preco` será `2.25`.
 *
 * A remoção do `break`, se o valor avaliado for `"Pêra"`, resultará
 * numa atribuição à variável `preco` do valor `5`, presente no corpo
 * do `default`. Isso acontece porque não se estabelece uma condição
 * de saída para o case `"Pêra"`.
 */

// Exercício 3

const numero = Number(prompt("Digite o primeiro número."));

if (numero > 0) {
  console.log("Esse número passou no teste");
  let mensagem = "Essa mensagem é secreta!!!";
}

console.log(mensagem);

/**
 * A primeira linha está, assincronamente, esperando por uma
 * interação do usuário. O resultado é convertido para o tipo
 * number e atribuído à variável `numero`.
 *
 * Se digitou-se o número `10`, a mensagem será `"Esse número
 * passou no teste"` E, se fosse `-10`, não haveria mensagem no
 * terminal, seria um erro (`mensagem` is not defined). Isso
 * acontece porque a variável mensagem foi declarada no bloco
 * do if statement, fora do escopo global, onde ocorre a passagem
 * da variável mensagem para o console.log.
 */
