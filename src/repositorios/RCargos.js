"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RCargos = void 0;
var RCargos = /** @class */ (function () {
    function RCargos() {
        this.cargos = new Map();
    }
    RCargos.prototype.setCargo = function (Cargo) {
        this.cargos.set(Cargo.getCargo(), Cargo);
    };
    RCargos.prototype.getCargo = function (nome) {
        return this.cargos.get(nome);
    };
    RCargos.prototype.existe = function (nome) {
        return this.cargos.get(nome) != undefined;
    };
    return RCargos;
}());
exports.RCargos = RCargos;
