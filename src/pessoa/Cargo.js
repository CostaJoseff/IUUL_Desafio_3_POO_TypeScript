"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
var Cargo = /** @class */ (function () {
    function Cargo(nome) {
        this.nome = nome;
    }
    Cargo.prototype.getCargo = function () {
        return this.nome;
    };
    return Cargo;
}());
exports.Cargo = Cargo;
