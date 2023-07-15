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
exports.Cliente = void 0;
var APessoa_1 = require("./APessoa");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(cpf, nome, telefone, endereco, senha) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.vip = false;
        _this.senha = senha;
        _this.enderecos = [];
        _this.enderecos.push(endereco);
        return _this;
    }
    Cliente.prototype.setVip = function () {
        this.vip = true;
    };
    Cliente.prototype.removerVir = function () {
        this.vip = false;
    };
    Cliente.prototype.listarEndereços = function () {
        var enderecosStr = [];
        for (var i = 0; i < this.enderecos.length; i++) {
            enderecosStr.push(this.enderecos[i].toString());
        }
        return enderecosStr;
    };
    Cliente.prototype.autenticar = function (dados) {
        return _super.prototype.getCpf.call(this) == dados[0] && this.senha == dados[1];
    };
    Cliente.prototype.adicionarEndereco = function (novoEndereco) {
        this.enderecos.forEach(function (endereco) {
            if (endereco.equals(novoEndereco)) {
                throw new Error("Endereço já existe");
            }
        });
        this.enderecos.push(novoEndereco);
    };
    Cliente.prototype.toString = function () {
        return "CPF: ".concat(_super.prototype.getCpf.call(this), "\n    Nome: ").concat(_super.prototype.getNome.call(this), "\n    VIP: ").concat(this.vip);
    };
    return Cliente;
}(APessoa_1.APessoa));
exports.Cliente = Cliente;
