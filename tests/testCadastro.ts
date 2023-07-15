import { Banco } from "../src/Banco";


function cadastrarFuncionario() {
  try {
    let banco = new Banco();
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    banco.cadastrarFuncionario("111", "awdawd", "awdawd", "awdawdawd", 50000, "awdawdawdawdaw");
    console.log("Teste cadastro | cpf existe | dados diferentes: X");
  } catch (erro) {}

  try {
    let banco = new Banco();
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    banco.cadastrarFuncionario("222", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
  } catch (erro) {
    console.log("Teste cadastro | cpf diferente | dados iguais: X");
  }

  let banco = new Banco();
  let funcionando = true;
  try {
    banco.cadastrarFuncionario("", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    funcionando = false;
  } catch (erro) {}
  try {
    banco.cadastrarFuncionario("        ", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    funcionando = false;
  } catch (erro) {}
  try {
    banco.cadastrarFuncionario("111", "       ", "4002", "Gerente", 50000, "coxinha123");
    funcionando = false;
  } catch (erro) {}
  try {
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "", 50000, "coxinha123");
    funcionando = false;
  } catch (erro) {}
  try {
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "          ");
    funcionando = false;
  } catch (erro) {}
  
  if (!funcionando) {
    console.log("Teste cadastro | strings inválidas: X");
  }

  try {
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", -50000, "coxinha123");
    console.log("Teste cadastro | salário negativo: X");
  } catch (error) {}
}

function cadastrarCliente() {
  try {
    let banco = new Banco();
    banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
    banco.cadastrarCliente("222", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
  } catch (erro) {
    console.log("Teste cadastro | cpf diferente | dados iguais: X");
  }

  try {
    let banco = new Banco();
    banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
    banco.cadastrarCliente("333", "adwad Azul", "awdawdwa", "awdawdawd", "awdawdawd", "awd", "awdwad", "aquawdawdela", "awdawd", "awdawdaw");
    console.log("Teste cadastro | cpf igual | dados diferentes: X");
  } catch (erro) {}

  let banco = new Banco();
  let funcionando = true;
  try {
    banco.cadastrarCliente("", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
    funcionando = false;
  } catch (error) {}
  try {
    banco.cadastrarCliente("           ", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
    funcionando = false;
  } catch (error) {}
  try {
    banco.cadastrarCliente("333", "Cliente Azul", "3321", "", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
    funcionando = false;
  } catch (error) {}
  try {
    banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "              ", "aquela", "ZZ", "eusoulegal");
    funcionando = false;
  } catch (error) {}
  try {
    banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "         ", "0", "nenhum", "", "ZZ", "eusoulegal");
    funcionando = false;
  } catch (error) {}
  if (!funcionando) {
    console.log("Teste cadastro | strings inválidas: X");
  }
}

function chamadas() {
  console.log("~ Testes de cadastro de Funcionáro ~");
  cadastrarFuncionario();
  console.log("-------------------------");
  console.log("~ Testes de cadastro de Cliente ~");
  cadastrarCliente();
  console.log("-------------------------");
}

chamadas();