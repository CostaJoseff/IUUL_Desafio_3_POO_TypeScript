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
        try {
            this.sPessoa.adicionarEndereco(cpf, cep, logadouro, numero, complemento, cidade, uf);
        }
        catch (error) {
            return null;
        }
    };
    Banco.prototype.listarEnderecos = function (cpf) {
        try {
            return this.sPessoa.listarEnderecos(cpf);
        }
        catch (error) {
            return null;
        }
    };
    Banco.prototype.exibirFuncionario = function (id) {
        try {
            return this.sPessoa.exibirFuncionario(id);
        }
        catch (error) {
            return null;
        }
    };
    Banco.prototype.criarContaCorrente = function (limite, proprietario) {
        try {
            return this.sConta.criarContaCorrente(limite, proprietario);
        }
        catch (error) {
            return null;
        }
    };
    Banco.prototype.criarContaPoupanca = function (proprietario) {
        return this.sConta.criarContaPoupanca(proprietario);
    };
    Banco.prototype.exibirConta = function (numero) {
        try {
            return this.sConta.exibirConta(numero);
        }
        catch (error) {
            return null;
        }
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
    return Banco;
}());
exports.Banco = Banco;
