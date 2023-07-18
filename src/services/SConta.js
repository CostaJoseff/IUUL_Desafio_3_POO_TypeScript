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
        if (limite < 0) {
            throw new Error("O limite não pode ser negativo.");
        }
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
        if (valor < 0) {
            throw new Error("Valor de deposito não pode ser negativo.");
        }
        var contaDestino = this.contas.getConta(numero);
        if (contaDestino === undefined) {
            throw new Error("Conta não existe.");
        }
        contaDestino === null || contaDestino === void 0 ? void 0 : contaDestino.depositar(valor);
    };
    SConta.prototype.sacar = function (valor, numero) {
        var _a;
        if (valor < 0) {
            throw new Error("Valor de deposito não pode ser negativo.");
        }
        (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.sacar(valor);
    };
    SConta.prototype.transferir = function (contaOrigem, contaDestino, valor) {
        var _a;
        if (valor < 0) {
            throw new Error("O valor de transferência não pode ser negativo.");
        }
        (_a = this.contas.getConta(contaOrigem)) === null || _a === void 0 ? void 0 : _a.transferir(this.contas.getConta(contaDestino), valor);
    };
    SConta.prototype.exibirConta = function (numero) {
        var _a;
        return (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.toString();
    };
    return SConta;
}());
exports.SConta = SConta;
