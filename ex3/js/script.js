class Usuario {
    constructor(username, senha) {
      this.username = username;
      this.senha = senha;
      this.logado = false;
    }
  }
  
  class Autenticacao {
    constructor() {
      this.usuarios = [];
    }
  
    registrar(username, senha) {
      const novoUsuario = new Usuario(username, senha);
      this.usuarios.push(novoUsuario);
      console.log(`Usuário ${username} registrado.`);
    }
  
    fazerLogin(username, senha) {
      const usuario = this.usuarios.find(user => user.username === username && user.senha === senha);
      if (usuario) {
        usuario.logado = true;
        console.log(`Usuário ${username} logado.`);
      } else {
        console.log(`Credenciais inválidas.`);
      }
    }
  
    fazerLogout(username) {
      const usuario = this.usuarios.find(user => user.username === username);
      if (usuario) {
        usuario.logado = false;
        console.log(`Usuário ${username} deslogado.`);
      } else {
        console.log(`Usuário não encontrado.`);
      }
    }
  }


  
//teste
  const sistemaAutenticacao = new Autenticacao();
  
  sistemaAutenticacao.registrar("juliana", "123");
  sistemaAutenticacao.registrar("isabelli", "321");
  
  sistemaAutenticacao.fazerLogin("juliana", "123");
  sistemaAutenticacao.fazerLogin("isabelli", "senhaerrada");
  
  sistemaAutenticacao.fazerLogout("juliana");
  