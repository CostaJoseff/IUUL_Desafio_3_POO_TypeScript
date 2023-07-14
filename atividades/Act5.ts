import { Banco } from "../src/Banco";
let banco = new Banco();

banco.cadastrarCliente("111", "Corredor", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
let numContaCorrent = <string> banco.criarContaCorrente(100, "111");
banco.depositar(300, numContaCorrent);

banco.cadastrarCliente("222", "Corredor2", "33221", "4055042", "ali2", "02", "nenhum2", "aquel2a", "ZZ2", "eusoulegal2");
let numContaCorrent2 = <string> banco.criarContaCorrente(100, "222");
banco.depositar(100, numContaCorrent2);

banco.transferir(numContaCorrent, numContaCorrent2, 1000);