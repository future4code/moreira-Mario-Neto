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
