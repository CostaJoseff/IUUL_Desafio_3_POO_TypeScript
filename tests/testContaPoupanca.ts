import { Banco } from "../src/Banco";

let banco: Banco;

function init() {
  banco = new Banco();
  banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
}

function init2() {
  banco = new Banco();
  let numCP = banco.criarContaPoupanca("asdasd");
  banco.depositar(100, numCP);
  return numCP;
}

function criarCP() {
  init();

  try {
    banco.criarContaPoupanca("");
  } catch (error) {}
  
  try {
    banco.criarContaPoupanca("asdasd");
  } catch (error) {
    console.log("Teste criar CP proprietário inexistente: X");
  }

  try {
    banco.criarContaPoupanca("asdasd");
    banco.criarContaPoupanca("asdasd");
    banco.criarContaPoupanca("asdasd");
  } catch (error) {
    console.log("Teste criar +CP mesmo proprietário: X");
  }
}

function depositar() {
  init();

  let numCP = banco.criarContaPoupanca("asdasd");
  
  try {
    banco.depositar(-10, numCP);
    console.log("Teste deposito negativo: X");
  } catch (error) {}

  try {
    banco.depositar(100, " ");
    console.log("Test deposito string vazia: X");
  } catch (error) {}

  try {
    banco.depositar(100, "fffffffffffff");
    console.log("Teste depositar conta inexistente: X");
  } catch (error) {}

  banco.depositar(100, numCP);
  let saldo = banco.obterSaldo(numCP);
  if (saldo !== 100) {
    console.log("Test deposito saldo 100: X");
    return;
  }
  banco.depositar(1000, numCP);
  saldo = banco.obterSaldo(numCP);
  if (saldo !== 1100) {
    console.log("Teste deposito saldo 1100: X");
    return;
  }
}

function sacar() {
  let numCP = init2();

  try {
    banco.sacar(10, " ");
    console.log("Teste sacar string vazia: X");
  } catch (error) {}

  try {
    banco.sacar(10, "ffffffffffff");
    console.log("Teste sacar conta inexistente: X");
  } catch (error) {}

  try {
    banco.sacar(-10, numCP);
    console.log("Teste sacar valor negativo: X");
  } catch (error) {}

  banco.sacar(55, numCP);
  let saldo = banco.obterSaldo(numCP);
  if (saldo !== 45) {
    console.log("Teste saque saldo 45: X");
    return;
  }
  
  try {
    banco.sacar(100, numCP);
    console.log("Teste sacar saldo insuficiente: X");
  } catch (error) {}

  banco.sacar(45, numCP);
  saldo = banco.obterSaldo(numCP);
  if (saldo !== 0) {
    console.log("Teste sacar saldo 0: X");
    return;
  }
}

function chamadas() {
  console.log("Teste ContaPoupança");
  console.log("-------------------------");
  criarCP();
  depositar();
  sacar();
  console.log("-------------------------");
}

chamadas();