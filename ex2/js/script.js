class Livro {
    constructor(nome, autor, identificador, categoria, quantidade) {
      this.nome = nome;
      this.autor = autor;
      this.identificador = identificador;
      this.categoria = categoria;
      this.quantidade = quantidade;
      this.emprestados = 0;
    }
  
    emprestar() {
      if (this.quantidade > 0) {
        this.quantidade--;
        this.emprestados++;
        console.log(`Livro "${this.nome}" foi emprestado.`);
      } else {
        console.log(`Não está disponível o livro: "${this.nome}".`);
      }
    }
  
    devolver() {
      if (this.emprestados > 0) {
        this.quantidade++;
        this.emprestados--;
        console.log(`Livro "${this.nome}" devolvido.`);
      } else {
        console.log(`Não foi emprestado.`);
      }
    }
  }
  
//teste
  const livro1 = new Livro("É Assim que Acaba", "Colleen Hoover", "ISBN123", "Romance", 2);
  const livro2 = new Livro("A Garota do Lago", "Charlie Donlea", "ISBN321", "Suspense", 3);
  
  livro1.emprestar();
  livro1.emprestar();
  livro1.devolver();
  
  livro2.emprestar();
  livro2.devolver();
  