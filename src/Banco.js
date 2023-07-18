"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var SConta_1 = require("./services/SConta");
var SPessoa_1 = require("./services/SPessoa");
var Banco = /** @class */ (function () {
    function Banco() {
        this.sConta = new SConta_1.SConta();
        this.sPessoa = new SPessoa_1.SPessoa();
    }
    Banco.prototype.cadastrarCliente = function (cpf, nome, telefone, cep, logadouro, numero, complemento, cidade, uf, senha) {
        this.sPessoa.cadastrarCliente(cpf, nome, telefone, cep, logadouro, numero, complemento, cidade, uf, senha);
    };
    Banco.prototype.cadastrarFuncionario = function (cpf, nome, telefone, cargoNome, salario, senha) {
        return this.sPessoa.cadastrarFuncionario(cpf, nome, telefone, cargoNome, salario, senha);
    };
    Banco.prototype.adicionarEndereco = function (cpf, cep, logadouro, numero, complemento, cidade, uf) {
        this.sPessoa.adicionarEndereco(cpf, cep, logadouro, numero, complemento, cidade, uf);
    };
    Banco.prototype.listarEnderecos = function (cpf) {
        return this.sPessoa.listarEnderecos(cpf);
    };
    Banco.prototype.exibirFuncionario = function (id) {
        return this.sPessoa.exibirFuncionario(id);
    };
    Banco.prototype.criarContaCorrente = function (limite, proprietario) {
        return this.sConta.criarContaCorrente(limite, proprietario);
    };
    Banco.prototype.criarContaPoupanca = function (proprietario) {
        return this.sConta.criarContaPoupanca(proprietario);
    };
    Banco.prototype.exibirConta = function (numero) {
        return this.sConta.exibirConta(numero);
    };
    Banco.prototype.depositar = function (valor, numero) {
        this.sConta.depositar(valor, numero);
    };
    Banco.prototype.sacar = function (valor, numero) {
        this.sConta.sacar(valor, numero);
    };
    Banco.prototype.transferir = function (contaOrigem, contaDestino, valor) {
        this.sConta.transferir(contaOrigem, contaDestino, valor);
    };
    Banco.prototype.obterSaldo = function (numero) {
        return this.sConta.calcularSaldo(numero);
    };
    return Banco;
}());
exports.Banco = Banco;
