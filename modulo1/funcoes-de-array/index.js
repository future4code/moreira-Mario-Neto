/* Exercícios de interpretação de código */

// Exercício 1

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayA = usuarios.map((item, index, array) => {
  console.log(item, index, array);
});

/**
 *
 * { nome: "Amanda Rangel", apelido: "Mandi" } 0 array `usuarios`
 * { nome: "Laís Petra", apelido: "Laura" } 1 array `usuarios`
 * { nome: "Letícia Chijo", apelido: "Chijo" } 2 array `usuarios`
 */

// Exercício 2

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayB = usuarios.map((item, index, array) => {
  return item.nome;
});

/**
 * "Amanda Rangel"
 * "Laís Petra"
 * "Letícia Chijo"
 */

// Exercício 3

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayC = usuarios.filter((item, index, array) => {
  return item.apelido !== "Chijo";
});

console.log(novoArrayC);

/**
 * [{ nome: "Amanda Rangel", apelido: "Mandi" },
 * { nome: "Laís Petra", apelido: "Laura" }]
 */
