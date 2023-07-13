class saldoInsuficienteErro extends Error {
  constructor(valorAtual: number, valorDeSaque: number) {
    const mensagem = `Não é possível sacar ${valorDeSaque}. O saldo atual é de ${valorAtual}`;
    super(mensagem);
    this.name = "saldoInsuficienteErro";
  }
}