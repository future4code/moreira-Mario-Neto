/* Exercícios de interpretação de código */

// Exercício 1

/* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayA = usuarios.map((item, index, array) => {
  console.log(item, index, array);
} );*/

/**
 *
 * { nome: "Amanda Rangel", apelido: "Mandi" } 0 array `usuarios`
 * { nome: "Laís Petra", apelido: "Laura" } 1 array `usuarios`
 * { nome: "Letícia Chijo", apelido: "Chijo" } 2 array `usuarios`
 */

// Exercício 2

/* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayB = usuarios.map((item, index, array) => {
  return item.nome;
});
 */
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

/* Exercícios de escrita de código */

// Exercício 1

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const mapBy = (array, key) => array.map((el) => el[key]);

const filterBy = (array, key, value) => array.filter((el) => el[key] == value);

const petNames = pets.map((p) => p.nome);
const wieners = filterBy(pets, "raca", "Salsicha");

console.log(wieners);

const discountAlerts = filterBy(pets, "raca", "Poodle").map(
  (p) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${p.nome}`
);
console.log(discountAlerts);

// Exercício 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

const productNames = mapBy(produtos, "nome");
console.log(productNames);

const discountedProducts = produtos.map((p) => ({
  nome: p.nome,
  categoria: p.categoria,
  preco: Number((p.preco * 0.95).toFixed(2)),
}));
console.log(discountedProducts);

const beverages = filterBy(produtos, "categoria", "Bebidas");
console.log(beverages);

const ype = produtos.filter((p) => p.nome.includes("Ypê"));
console.log(ype);

const promoYpe = ype.map((p) => `Compre ${p.nome} por ${p.preco}`);
console.log(promoYpe);

/* Desafios */

// Exercício 1

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const alphabetic = mapBy(pokemons, "nome").sort();
console.log(alphabetic);

const types = pokemons
  .map((p) => p.tipo)
  .filter((t, i, arr) => !arr.slice(0, i).includes(t));

console.log(types);
