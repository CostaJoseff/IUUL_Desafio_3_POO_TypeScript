import { Banco } from "../src/Banco";
let banco = new Banco();

banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
let numeroDaConta = (<string> banco.criarContaCorrente(500, "333"));
console.log(banco.exibirConta(numeroDaConta));

banco.depositar(100, numeroDaConta);
banco.depositar(100, numeroDaConta);
banco.depositar(100, numeroDaConta);

console.log("\n\n");
console.log(banco.exibirConta(numeroDaConta));

banco.sacar(50, numeroDaConta);

console.log("\n\n");
console.log(banco.exibirConta(numeroDaConta));
