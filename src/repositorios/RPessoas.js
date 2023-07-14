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
    RPessoas.prototype.contem = function (id) {
        return this.getPessoa(id) != undefined && this.getPessoa(id) != null;
    };
    RPessoas.prototype.contemFuncionario = function (cpf) {
        for (var _i = 0, _a = Array.from(this.pessoas.values()); _i < _a.length; _i++) {
            var valor = _a[_i];
            if (valor.getCpf() == cpf) {
                return true;
            }
        }
        return false;
    };
    return RPessoas;
}());
exports.RPessoas = RPessoas;
