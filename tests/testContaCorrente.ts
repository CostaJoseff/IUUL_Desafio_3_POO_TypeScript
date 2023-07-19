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

function init3() {
  banco = new Banco();
  let contaOrigem: string = banco.criarContaCorrente(10, "111");
  let contaDestino = banco.criarContaPoupanca("111");
  banco.depositar(100, contaOrigem);
  banco.depositar(100, contaDestino);

  return [contaOrigem, contaDestino];
}

function criarCC() {
  init();

  try {
    banco.criarContaCorrente(10, "  ");
    console.log("Teste criar CC string vazia: X");
  } catch (error) {}

  try {
    banco.criarContaCorrente(10, "abc");
  } catch (erro) {
    console.log("Teste criar CC proprietario inexistente: X");
  }

  try {
    banco.criarContaCorrente(10, "abc");
    banco.criarContaCorrente(10, "abc");
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

function saqueCC() {
  const numeroDaConta = init2();

  try {
    banco.sacar(500, "asdasd")
    console.log("Teste saque conta inexistente: X");
  } catch (error) {}

  try {
    banco.sacar(-500, numeroDaConta);
    console.log("Teste saque saldo negativo: X");
  } catch (error) {}

  banco.depositar(500, numeroDaConta);
  banco.sacar(250, numeroDaConta);
  let saldo = banco.obterSaldo(numeroDaConta);
  if (saldo !== 250) {
    console.log("Teste saque saldo 250: X");
    return;
  }

  banco.sacar(200, numeroDaConta);
  saldo = banco.obterSaldo(numeroDaConta);
  if (saldo !== 50) {
    console.log("Teste saque saldo 50: X");
    return;
  }

  banco.sacar(60, numeroDaConta);
  saldo = banco.obterSaldo(numeroDaConta);
  if (saldo !== -10) {
    console.log("Teste saque saldo -10: X");
    return;
  }

  try {
    banco.sacar(60, numeroDaConta);
    console.log("Teste saque saldo no limite: X");
  } catch (error) {}
}

function transferenciaCC() {
  let contas = init3();
  let contaOrigem = contas[0];
  let contaDestino = contas[1];

  try {
    banco.transferir("ffffffff", contaDestino, 10);
    console.log("Teste transferir conta origem inexistente: X");
  } catch (error) {}

  try {
    banco.transferir(contaOrigem, "ffffffff", 10);
    console.log("Teste transferir conta destino inexistente: X");
  } catch (error) {}

  try {
    banco.transferir(contaOrigem, contaDestino, -10);
    console.log("Teste transferir valor negativo: X");
  } catch (error) {}

  banco.transferir(contaOrigem, contaDestino, 10);
  let saldoOrigem = banco.obterSaldo(contaOrigem);
  let saldoDestino = banco.obterSaldo(contaDestino);
  if (saldoOrigem !== 90 || saldoDestino !== 110) {
    console.log("Teste transferir origem: 90, destino: 110: X");
    return;
  }

  try {
    banco.transferir(contaOrigem, contaDestino, 110);
    console.log("Teste transferir saldo insuficiente: X");
  } catch (error) {}

  banco.transferir(contaOrigem, contaDestino, 100);
  saldoOrigem = banco.obterSaldo(contaOrigem);
  saldoDestino = banco.obterSaldo(contaDestino);
  if (saldoOrigem !== -10 || saldoDestino !== 210) {
    console.log("Teste transferir origem: 90, destino: 110: X");
    return;
  }
}

function chamadas() {
  console.log("Teste ContaCorrente");
  console.log("-------------------------");
  criarCC();
  depositoCC();
  saqueCC();
  transferenciaCC();
  console.log("-------------------------");
}

chamadas();