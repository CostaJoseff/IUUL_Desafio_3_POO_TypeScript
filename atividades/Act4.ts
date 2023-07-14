import { Banco } from "../src/Banco";
import { ContaCorrente } from "../src/conta/ContaCorrente";
let banco = new Banco();
banco.cadastrarCliente("111", "Corredor", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
let numContaCorrent = <string> banco.criarContaCorrente(0, "111");

banco.cadastrarCliente("222", "Popo", "3133123", "234234234", "dfdsfg", "1", "sdfsdf", "sdfsdfsf", "WW", "eusoulegal");
let numContaPoup = <string> banco.criarContaPoupanca("222");

banco.depositar(1000, numContaCorrent);
banco.depositar(1000, numContaPoup);
banco.transferir(numContaCorrent, numContaPoup, 500);

console.log(banco.exibirConta(numContaCorrent) + "\n\n");
console.log(banco.exibirConta(numContaPoup) + "\n\n");



