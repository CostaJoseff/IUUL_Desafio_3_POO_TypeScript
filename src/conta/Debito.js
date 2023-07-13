"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
var Debito = /** @class */ (function () {
    function Debito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    Debito.prototype.getValor = function () {
        return this.valor;
    };
    Debito.prototype.getData = function () {
        return this.data;
    };
    return Debito;
}());
exports.Debito = Debito;
