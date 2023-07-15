"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco_1 = require("../src/Banco");
var banco;
function init() {
    banco = new Banco_1.Banco();
    banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
}
function adicionarEndereco() {
    init();
    try {
        banco.adicionarEndereco("333", "405504", "ali", "0", "nenhum", "aquela", "ZZ");
        console.log("Teste adicionar endereço existente: X");
    }
    catch (error) { }
    try {
        banco.adicionarEndereco("333", "5", "ali", "0", "nenhum", "aquela", "ZZ");
    }
    catch (error) {
        console.log("Teste adicionar endereço com 1 diferença: X");
    }
    var funcionando = true;
    try {
        banco.adicionarEndereco("", "5", "ali", "0", "nenhum", "aquela", "ZZ");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.adicionarEndereco("        ", "5", "ali", "0", "nenhum", "aquela", "ZZ");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.adicionarEndereco("333", "5", "ali", "0", "", "aquela", "ZZ");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.adicionarEndereco("333", "5", "ali", "             ", "nenhum", "aquela", "ZZ");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.adicionarEndereco("333", "5", "", "0", "nenhum", "aquela", "            ");
        funcionando = false;
    }
    catch (error) { }
    try {
        banco.adicionarEndereco("333", "5", "ali", "0", "", "aquela", "ZZ");
        funcionando = false;
    }
    catch (error) { }
    if (!funcionando) {
        console.log("Test strings invalidas: X");
    }
}
function chamadas() {
    console.log("~ Adicionar endereço ~");
    adicionarEndereco();
    console.log("-------------------------");
}
chamadas();
