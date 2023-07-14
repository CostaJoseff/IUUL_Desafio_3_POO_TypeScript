"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SConta = void 0;
var ContaCorrente_1 = require("../conta/ContaCorrente");
var ContaPoupanca_1 = require("../conta/ContaPoupanca");
var RContas_1 = require("../repositorios/RContas");
var SConta = /** @class */ (function () {
    function SConta() {
        this.numeroDeContaDisponivel = 0;
        this.contas = new RContas_1.RContas();
    }
    SConta.prototype.criarContaCorrente = function (limite, proprietario) {
        var contaCorrente = new ContaCorrente_1.ContaCorrente("".concat(this.numeroDeContaDisponivel), limite, proprietario);
        this.contas.setConta(contaCorrente);
        this.numeroDeContaDisponivel++;
        return contaCorrente.getNumero();
    };
    SConta.prototype.criarContaPoupanca = function (proprietario) {
        var contaPoupanca = new ContaPoupanca_1.ContaPoupanca("".concat(this.numeroDeContaDisponivel), proprietario);
        this.contas.setConta(contaPoupanca);
        this.numeroDeContaDisponivel++;
        return contaPoupanca.getNumero();
    };
    SConta.prototype.calcularSaldo = function (numero) {
        var _a;
        return (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.calcularSaldo();
    };
    SConta.prototype.depositar = function (valor, numero) {
        var _a;
        (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.depositar(valor);
    };
    SConta.prototype.sacar = function (valor, numero) {
        var _a;
        (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.sacar(valor);
    };
    SConta.prototype.transferir = function (contaOrigem, contaDestino, valor) {
        var _a;
        (_a = this.contas.getConta(contaOrigem)) === null || _a === void 0 ? void 0 : _a.transferir(this.contas.getConta(contaDestino), valor);
    };
    SConta.prototype.exibirConta = function (numero) {
        var _a;
        return (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.toString();
    };
    return SConta;
}());
exports.SConta = SConta;