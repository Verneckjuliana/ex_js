class ContaBancaria {
    constructor(saldo, tipo) {
      this.saldo = saldo;
      this.tipo = tipo;
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
      } else {
        this.saldo -= valor;
        console.log(`Sacou ${valor} da conta ${this.tipo}.`);
        console.log(`Saldo atual: ${this.saldo}`);
      }
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depositou ${valor} na conta ${this.tipo}.`);
      console.log(`Saldo atual: ${this.saldo}`);
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(saldo) {
      super(saldo, "corrente");
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(saldo) {
      super(saldo, "poupança");
    }
  
    renderJuros(taxa) {
      const juros = this.saldo * taxa;
      this.depositar(juros);
      console.log(`Juros de ${juros} renderizados na conta ${this.tipo}.`);
    }
  }
  


//teste
  const minhaContaCorrente = new ContaCorrente(1500);
  minhaContaCorrente.depositar(500);
  minhaContaCorrente.sacar(100);
  
  const minhaContaPoupanca = new ContaPoupanca(5000);
  minhaContaPoupanca.depositar(100);
  minhaContaPoupanca.renderJuros(0.15);
  