"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
var AConta_1 = require("./AConta");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, limite, proprietario) {
        var _this = _super.call(this, numero, proprietario) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.calcularSaldo = function () {
        return _super.prototype.calcularSaldo.call(this);
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if ((this.calcularSaldo() - valor) < -this.limite) {
            throw new Error("Saldo insuficiente");
        }
        _super.prototype.sacar.call(this, valor);
    };
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        if ((this.calcularSaldo() - valor) < -this.limite) {
            throw new Error("Saldo insuficiente");
        }
        _super.prototype.sacar.call(this, valor);
        contaDestino.depositar(valor);
    };
    ContaCorrente.prototype.getClass = function () {
        return "ContaCorrente";
    };
    ContaCorrente.prototype.toString = function () {
        return "Numero da Conta: " + _super.prototype.getNumero.call(this) + "\n"
            + "Proprietário da Conta: " + _super.prototype.getProprietario.call(this) + "\n"
            + "Saldo: R$" + _super.prototype.getSaldo.call(this) + " - Limite: R$" + this.limite + "\n"
            + "Total: R$" + (_super.prototype.getSaldo.call(this) + this.limite);
    };
    return ContaCorrente;
}(AConta_1.AConta));
exports.ContaCorrente = ContaCorrente;
