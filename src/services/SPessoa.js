"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPessoa = void 0;
var Cargo_1 = require("../pessoa/Cargo");
var Cliente_1 = require("../pessoa/Cliente");
var Endereco_1 = require("../pessoa/Endereco");
var Funcionario_1 = require("../pessoa/Funcionario");
var RCargos_1 = require("../repositorios/RCargos");
var RPessoas_1 = require("../repositorios/RPessoas");
var SPessoa = /** @class */ (function () {
    function SPessoa() {
        this.pessoas = new RPessoas_1.RPessoas();
        this.cargos = new RCargos_1.RCargos();
        this.codFuncionarioDisponivel = 0;
    }
    SPessoa.prototype.cadastrarCliente = function (cpf, nome, telefone, cep, logadouro, numero, complemento, cidade, uf, senha) {
        var clienteEndereço = new Endereco_1.Endereco(cep, logadouro, numero, complemento, cidade, uf);
        var novoCliente = new Cliente_1.Cliente(cpf, nome, telefone, clienteEndereço, senha);
        this.pessoas.setCliente(novoCliente);
    };
    SPessoa.prototype.cadastrarFuncionario = function (cpf, nome, telefone, cargoNome, salario, senha) {
        if (!this.cargos.existe(cargoNome)) {
            this.cargos.setCargo(new Cargo_1.Cargo(cargoNome));
        }
        var novoFuncionario = new Funcionario_1.Funcionario(cpf, nome, telefone, this.cargos.getCargo(cargoNome), salario, "".concat(this.codFuncionarioDisponivel), senha);
        this.pessoas.setFuncionario(novoFuncionario);
        this.codFuncionarioDisponivel++;
        return novoFuncionario.getCodFuncionario();
    };
    SPessoa.prototype.adicionarEndereco = function (cpf, cep, logadouro, numero, complemento, cidade, uf) {
        var novoEndereco = new Endereco_1.Endereco(cep, logadouro, numero, complemento, cidade, uf);
        this.pessoas.getPessoa(cpf).adicionarEndereco(novoEndereco);
    };
    SPessoa.prototype.listarEnderecos = function (cpf) {
        return this.pessoas.getPessoa(cpf).listarEndereços();
    };
    SPessoa.prototype.exibirFuncionario = function (codFuncionario) {
        return this.pessoas.getPessoa(codFuncionario).toString();
    };
    return SPessoa;
}());
exports.SPessoa = SPessoa;
