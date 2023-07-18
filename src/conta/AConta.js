"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AConta = void 0;
var Credito_js_1 = require("./Credito.js");
var Debito_js_1 = require("./Debito.js");
var AConta = /** @class */ (function () {
    function AConta(numero, proprietario) {
        this.numero = numero;
        this.saldo = 0;
        this.depositos = [];
        this.saques = [];
        this.proprietario = proprietario;
    }
    AConta.prototype.depositar = function (valor) {
        this.depositos.push(new Credito_js_1.Credito(valor, new Date()));
        this.saldo += valor;
    };
    AConta.prototype.sacar = function (valor) {
        this.saques.push(new Debito_js_1.Debito(valor, new Date()));
        this.saldo -= valor;
    };
    AConta.prototype.getNumero = function () {
        return this.numero;
    };
    AConta.prototype.getSaldo = function () {
        return this.saldo;
    };
    AConta.prototype.getProprietario = function () {
        return this.proprietario;
    };
    AConta.prototype.calcularSaldo = function () {
        var saldo = 0;
        for (var i = 0; i < this.depositos.length; i++) {
            saldo += this.depositos[i].getValor();
        }
        for (var i = 0; i < this.saques.length; i++) {
            saldo -= this.saques[i].getValor();
        }
        if (saldo != this.saldo) {
            throw new Error("Soma de saldo diverge do saldo armazenado.");
        }
        return saldo;
    };
    return AConta;
}());
exports.AConta = AConta;
