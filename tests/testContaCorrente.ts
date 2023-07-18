import { Banco } from "../src/Banco";

let banco: Banco;

function init() {
  banco = new Banco();
  banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
}

function init2() {
  banco = new Banco();
  return banco.criarContaCorrente(10, "111");
}

function criarCC() {
  init();

  try {
    banco.criarContaCorrente(10, "abc");
  } catch (erro) {
    console.log("Teste criar CC proprietario inexistente: X");
  }

  try {
    banco.criarContaCorrente(10, "abc");
  } catch (erro) {
    console.log("Teste criar duplicata CC proprietario inexistente: X");
  }

  try {
    banco.criarContaCorrente(0, "ddd");
  } catch (erro) {
    console.log("Teste criar CC proprietario inexistente e limite 0: X");
  }

  try {
    banco.criarContaCorrente(-50, "ddd");
    console.log("Teste criar CC proprietario inexistente e limite < 0: X");
  } catch (error) {}
}

function depositoCC() {
  const numeroDaConta = init2();

  try {
    banco.depositar(500, "asdasd");
    console.log("Teste depositar conta inexistente: X");
  } catch (error) {}

  try {
    banco.depositar(-500, numeroDaConta);
    console.log("Teste depositar saldo negativo: X");
  } catch (error) {}

  banco.depositar(500, numeroDaConta);
  let saldo = banco.obterSaldo(numeroDaConta);
  if (saldo !== 500) {
    console.log("Teste deposito saldo 500: X");
    return;
  }
  banco.depositar(500, numeroDaConta);
  saldo = banco.obterSaldo(numeroDaConta);
  if (saldo !== 1000) {
    console.log("Teste deposito saldo 1000: X");
    return;
  }
}

function chamadas() {
  console.log("Teste ContaCorrente");
  console.log("-------------------------");
  criarCC();
  depositoCC();
  console.log("-------------------------");
}

chamadas();