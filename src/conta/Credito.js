"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
var Credito = /** @class */ (function () {
    function Credito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    Credito.prototype.getValor = function () {
        return this.valor;
    };
    Credito.prototype.getData = function () {
        return this.data;
    };
    return Credito;
}());
exports.Credito = Credito;
