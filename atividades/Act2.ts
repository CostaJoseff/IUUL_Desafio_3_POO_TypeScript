import { Banco } from "../src/Banco";

let banco = new Banco();
banco.cadastrarCliente("333", "Cliente Azul", "3321", "405504", "ali", "0", "nenhum", "aquela", "ZZ", "eusoulegal");
banco.adicionarEndereco("333", "3030", "loga2", "2", "comp2",  "cidade2", "ZZ");
banco.adicionarEndereco("333", "333333", "loga3", "3", "comp3", "cidade3", "XC");

let enderecos = (<String[]> banco.listarEnderecos("333"));
for (let i = 0; i < enderecos.length; i++) {
  console.log("Endereço " + (i+1));
  console.log("---------------------------");
  console.log(enderecos[i].toString());
  console.log("---------------------------\n");
}
