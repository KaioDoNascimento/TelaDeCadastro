function validaDados(nome, email, senha) {
   
    // Validação do nome
    if (nome.value.length < 4) {
      alert("O nome deve ter pelo menos 4 caracteres.");
      return false;
    }

    // Validação do email
    var re = /\S+@\S+\.\S+/;
    if(!re.test(email.value)){
        alert("Email inválido, verifique o formato digitado")
        return false;
    }
    
    // Validação da senha
    if (senha.value.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }
  
    // Se todas as validações passarem, retorna true
    alert("Cadastro feito com sucesso!")
    return true;
  }
  