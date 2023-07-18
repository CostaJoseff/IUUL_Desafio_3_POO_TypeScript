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
        if (valor < 0) {
            throw new Error("Valor de deposito não pode ser negativo.");
        }
        var conta = this.contas.getConta(numero);
        if (conta === undefined) {
            throw new Error("Conta não existe.");
        }
        conta === null || conta === void 0 ? void 0 : conta.sacar(valor);
    };
    SConta.prototype.transferir = function (contaOrigem, contaDestino, valor) {
        if (valor < 0) {
            throw new Error("O valor de transferência não pode ser negativo.");
        }
        var origem = this.contas.getConta(contaOrigem);
        if (origem === undefined) {
            throw new Error("Conta origem não existe.");
        }
        var destino = this.contas.getConta(contaDestino);
        if (destino === undefined) {
            throw new Error("Conta destino não existe.");
        }
        origem === null || origem === void 0 ? void 0 : origem.transferir(destino, valor);
    };
    SConta.prototype.exibirConta = function (numero) {
        var _a;
        return (_a = this.contas.getConta(numero)) === null || _a === void 0 ? void 0 : _a.toString();
    };
    return SConta;
}());
exports.SConta = SConta;
