"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chamadas = void 0;
var Banco_1 = require("../src/Banco");
function cadastrarFuncionario() {
    try {
        var banco_1 = new Banco_1.Banco();
        banco_1.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
        banco_1.cadastrarFuncionario("111", "awdawd", "awdawd", "awdawdawd", 50000, "awdawdawdawdaw");
        console.log("Teste cadastro | cpf existe | dados diferentes: X");
    }
    catch (erro) { }
    try {
        var banco_2 = new Banco_1.Banco();
        banco_2.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
        banco_2.cadastrarFuncionario("222", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    }
    catch (erro) {
        console.log("Teste cadastro | cpf diferente | dados iguais: X");
    }
    var banco = new Banco_1.Banco();
    var funcionando = true;
    try {
        banco.cadastrarFuncionario("", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
        funcionando = false;
    }
    catch (erro) { }
    try {
        banco.cadastrarFuncionario("        ", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
        funcionando = false;
    }
    catch (erro) { }
    try {
        banco.cadastrarFuncionario("111", "       ", "4002", "Gerente", 50000, "coxinha123");
        funcionando = false;
    }
    catch (erro) { }
    try {
        banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "", 50000, "coxinha123");
        funcionando = false;
    }
    catch (erro) { }
    try {
        banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "          ");
        funcionando = false;
    }
    catch (erro) { }
    if (!funcionando) {
        console.log("Teste cadastro | strings inválidas: X");
    }
    try {
        banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", -50000, "coxinha123");
        console.log("Teste cadastro | salário negativo: X");
    }
    catch (error) { }
}
function cadastrarCliente() {
    try {
        var banco_3 = new Banco_1.Banco();
        banco_3.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
        banco_3.cadastrarCliente("222", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
    }
    catch (erro) {
        console.log("Teste cadastro | cpf diferente | dados iguais: X");
    }
    try {
        var banco_4 = new Banco_1.Banco();
        banco_4.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
        banco_4.cadastrarCliente("333", "adwad Azul", "awdawdwa", "awdawdawd", "awdawdawd", "awd", "awdwad", "aquawdawdela", "awdawd", "awdawdaw");
        console.log("Teste cadastro | cpf igual | dados diferentes: X");
    }
    catch (erro) { }
    var banco = new Banco_1.Banco();
    var funcionando = true;
    try {
        banco.cadastrarCliente("", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.cadastrarCliente("           ", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.cadastrarCliente("333", "Cliente Azul", "3321", "", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "              ", "aquela", "ZZ", "eusoulegal");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "         ", "0", "nenhum", "", "ZZ", "eusoulegal");
        funcionando = false;
    }
    catch (error) { }
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
exports.chamadas = chamadas;
chamadas();
