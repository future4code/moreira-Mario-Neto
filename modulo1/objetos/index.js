/* Exercícios de interpretação de código */

// Exercício 1

const filme = {
  nome: "Auto da Compadecida",
  ano: 2000,
  elenco: [
    "Matheus Nachtergaele",
    "Selton Mello",
    "Denise Fraga",
    "Virginia Cavendish",
  ],
  transmissoesHoje: [
    { canal: "Telecine", horario: "21h" },
    { canal: "Canal Brasil", horario: "19h" },
    { canal: "Globo", horario: "14h" },
  ],
};

console.log(filme.elenco[0]); // "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]); // "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]); // { canal: "Globo", horario: "14h" }

// Exercício 2

const cachorro = {
  nome: "Juca",
  idade: 3,
  raca: "SRD",
};

const gato = { ...cachorro, nome: "Juba" };

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };

console.log(cachorro);
/**
 * {
 *  nome: "Juca",
 *  idade: 3,
 *  raca: "SRD",
 * };
 */
console.log(gato);
/**
 * {
 *  nome: "Juba",
 *  idade: 3,
 *  raca: "SRD",
 * };
 */
console.log(tartaruga);
/**
 * {
 *  nome: "Jubo",
 *  idade: 3,
 *  raca: "SRD",
 * };
 */
/**
 * A sintaxe spread permite que um iterável, como um array ou string,
 * seja expandido em chamadas de funções ou em arrays ou objetos literais.
 * Ou seja, permite que passemos um número indefinidamente expansível como
 * argumento de uma chamada de função, ou então, que mesclemos os elementos
 * de uma array em outra ou as propriedades e métodos de um objeto em outro.
 */

// Exercício 3

function minhaFuncao(objeto, propriedade) {
  return objeto[propriedade];
}

const pessoa = {
  nome: "Caio",
  idade: 23,
  backender: false,
};

console.log(minhaFuncao(pessoa, "backender")); // false
console.log(minhaFuncao(pessoa, "altura")); // undefined

/**
 * Tentou-se acessar uma propriedade não contida no objeto pessoa, ou seja, é
 * um valor inexistente, "indefinido"; ao objeto, não foi definida a propriedade
 * `altura`.
 */

/* Exercícios de escrita de código */

// Exercício 1

let obj1 = {
  nome: "Mero Objeto",
  apelidos: ["coisa", "troço", "negócio"],
};

function printSalutation(obj) {
  console.log(
    `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`
  );
}

printSalutation(obj1);

let obj2 = {
  ...obj1,
  apelidos: ["simplão", "modesto", "treco"],
};

printSalutation(obj2);

// Exercício 2

let obj3 = {
  nome: "A",
  idade: 23,
  profissao: "Alinhador",
};

let obj4 = {
  nome: "B",
  idade: 21,
  profissao: "Desalinhador",
};

function expandObj(obj) {
  return [...Object.values(obj), obj.profissao.length];
}

console.log(expandObj(obj3));
console.log(expandObj(obj4));

// Exercício 3

let carrinho = [];

let manga = {
  nome: "manga",
  disponibilidade: true,
};

let laranja = {
  nome: "laranja",
  disponibilidade: true,
};

let limao = {
  nome: "limao",
  disponibilidade: true,
};

function sacolao(fruit) {
  carrinho.push(fruit);
}

sacolao(manga);
sacolao(laranja);
sacolao(limao);

console.log(carrinho);

/* Desafios */

// Exercício 1

function profile() {
  let user = {
    userName: prompt("Qual é seu nome?"),
    userAge: prompt("Qual é sua idade?"),
    userOccupation: prompt("Qual é sua profissão?"),
  };

  console.log(user);
  console.log(typeof user);
}

profile();

// Exercício 2

let jumanji = {
  name: "Jumanji",
  releaseYear: 1995,
};

let harryPotter = {
  name: "Harry Potter",
  releaseYear: "2008",
};

function compareMovieReleases(movie1, movie2) {
  return `
        O primeiro filme foi lançado antes do segundo? ${
          movie1.releaseYear < movie2.releaseYear
        }
        O primeiro filme foi lançado no mesmo ano do segundo? ${
          movie1.releaseYear === movie2.releaseYear
        }
  `;
}

console.log(compareMovieReleases(jumanji, harryPotter));

// Exercício 3

function estoqueSacolao(fruit) {
  fruit.disponibilidade = !fruit.disponibilidade;
  return fruit;
}

console.log(estoqueSacolao(limao));
