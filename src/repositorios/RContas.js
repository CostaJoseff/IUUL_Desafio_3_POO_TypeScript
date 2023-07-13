"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RContas = void 0;
var RContas = /** @class */ (function () {
    function RContas() {
        this.contas = new Map();
    }
    RContas.prototype.setConta = function (AConta) {
        this.contas.set(AConta.getNumero(), AConta);
    };
    RContas.prototype.getConta = function (numero) {
        return this.contas.get(numero);
    };
    RContas.prototype.getContas = function () {
        return this.contas.values();
    };
    return RContas;
}());
exports.RContas = RContas;
