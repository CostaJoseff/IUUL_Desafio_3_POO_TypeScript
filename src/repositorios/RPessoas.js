"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPessoas = void 0;
var RPessoas = /** @class */ (function () {
    function RPessoas() {
        this.pessoas = new Map();
    }
    RPessoas.prototype.setCliente = function (cliente) {
        this.pessoas.set(cliente.getCpf(), cliente);
    };
    RPessoas.prototype.setFuncionario = function (funcionario) {
        this.pessoas.set(funcionario.getCodFuncionario(), funcionario);
    };
    RPessoas.prototype.getPessoa = function (id) {
        return this.pessoas.get(id);
    };
    RPessoas.prototype.getPessoas = function () {
        return this.pessoas.values();
    };
    return RPessoas;
}());
exports.RPessoas = RPessoas;
