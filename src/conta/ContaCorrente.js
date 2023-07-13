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
    function ContaCorrente(numero, limite) {
        var _this = _super.call(this, numero) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.calcularSaldo = function () {
        return _super.prototype.calcularSaldo.call(this) + this.limite;
    };
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        if (this.calcularSaldo() < valor) {
            throw new Error("Saldo insuficiente");
        }
        _super.prototype.sacar.call(this, valor);
        contaDestino.depositar(valor);
    };
    ContaCorrente.prototype.getClass = function () {
        return "ContaCorrente";
    };
    return ContaCorrente;
}(AConta_1.AConta));
exports.ContaCorrente = ContaCorrente;
