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
exports.Funcionario = void 0;
var APessoa_1 = require("./APessoa");
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(cpf, nome, telefone, cargo, salario, codFuncionario, senha) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        _this.senha = senha;
        _this.codFuncionario = codFuncionario;
        return _this;
    }
    Funcionario.prototype.autenticar = function (dados) {
        return this.codFuncionario == dados[0] && this.senha == dados[1];
    };
    Funcionario.prototype.getCodFuncionario = function () {
        return this.codFuncionario;
    };
    Funcionario.prototype.toString = function () {
        return "Codigo do Funcion\u00E1rio: ".concat(this.codFuncionario, "\nNome: ").concat(_super.prototype.getNome.call(this), "\nCargo: ").concat(this.cargo.getCargo());
    };
    return Funcionario;
}(APessoa_1.APessoa));
exports.Funcionario = Funcionario;
