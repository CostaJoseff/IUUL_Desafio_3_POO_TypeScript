"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(cep, logadouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logadouro = logadouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    Endereco.prototype.toString = function () {
        return "CEP: ".concat(this.cep, "\nLogadouro: ").concat(this.logadouro, " - N\u00B0 ").concat(this.numero, "\nComplemento: ").concat(this.complemento, "\nCidade: ").concat(this.cidade, " - ").concat(this.uf, ";");
    };
    return Endereco;
}());
exports.Endereco = Endereco;
