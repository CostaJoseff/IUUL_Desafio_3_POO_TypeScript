"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APessoa = void 0;
var APessoa = /** @class */ (function () {
    function APessoa(cpf, nome, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }
    APessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    APessoa.prototype.getNome = function () {
        return this.nome;
    };
    return APessoa;
}());
exports.APessoa = APessoa;
