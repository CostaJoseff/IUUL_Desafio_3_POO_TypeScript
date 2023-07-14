"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco_1 = require("../src/Banco");
var banco = new Banco_1.Banco();
banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
banco.adicionarEndereco("333", "3030", "loga2", "2", "comp2", "cidade2", "ZZ");
banco.adicionarEndereco("333", "333333", "loga3", "3", "comp3", "cidade3", "XC");
var enderecos = banco.listarEnderecos("333");
for (var i = 0; i < enderecos.length; i++) {
    console.log("Endereço " + (i + 1));
    console.log("---------------------------");
    console.log(enderecos[i].toString());
    console.log("---------------------------\n");
}
