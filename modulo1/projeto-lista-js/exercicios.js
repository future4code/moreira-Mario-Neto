// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const height = Number(prompt("Uma altura para o retângulo"));
  const width = Number(prompt("Uma largura para o retângulo"));
  const area = height * width;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const currYear = Number(prompt("Em que ano estamos?"));
  const birthYear = Number(prompt("Em que ano você nasceu?"));

  console.log(currYear - birthYear);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / altura ** 2;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Seu nome");
  const idade = prompt("Sua idade");
  const email = prompt("Seu e-mail");

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const colour1 = prompt("Insira uma cor favorita");
  const colour2 = prompt("Agora outra");
  const colour3 = prompt("Por fim, mais uma");

  console.log([colour1, colour2, colour3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  array.push(array.splice(0, 1, array.pop())[0]);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const currYear = Number(prompt("Qual é o ano atual?"));
  const birthYear = Number(prompt("Qual é o ano do seu nascimento?"));
  const IDYear = Number(prompt("Qual é o ano da emissão de seu RG?"));

  const age = currYear - birthYear;
  const issueYears = currYear - IDYear;

  console.log(
    (age <= 20 && issueYears >= 5) ||
      (age >= 20 && age <= 50 && issueYears >= 10) ||
      (age > 50 && issueYears >= 15)
  );
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 4 == 0 && !(ano % 100 == 0 && ano % 400 !== 0);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const validEnrolment = [
    prompt("Você tem mais de 18 anos?"),
    prompt("Você possui ensino médio completo?"),
    prompt(
      "Você possui disponibilidade exclusiva durante os horários do curso?"
    ),
  ];

  console.log(validEnrolment.every((answer) => answer == "sim"));
}
