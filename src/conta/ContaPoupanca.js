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
exports.ContaPoupanca = void 0;
var AConta_1 = require("./AConta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, proprietario) {
        return _super.call(this, numero, proprietario) || this;
    }
    ContaPoupanca.prototype.calcularSaldo = function () {
        return _super.prototype.calcularSaldo.call(this);
    };
    ContaPoupanca.prototype.getClass = function () {
        return "ContaPoupanca";
    };
    ContaPoupanca.prototype.toString = function () {
        return "Numero da Conta: " + _super.prototype.getNumero.call(this) + "\n"
            + "Proprietário da Conta: " + _super.prototype.getProprietario.call(this) + "\n"
            + "Saldo: " + _super.prototype.getSaldo.call(this);
    };
    return ContaPoupanca;
}(AConta_1.AConta));
exports.ContaPoupanca = ContaPoupanca;
