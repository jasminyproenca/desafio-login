/*

#Orientações: Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
id, nome, email, senha e expirado (boleano, pode ser true ou false). 
Adicione ao menos um dos usuarios como expirado sendo true.

#Desafio:
Construa uma função de para realizar login. 
Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. 
A função deve dizer que as credenciais expiraram caso expirado for true. 
A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

#Testes:
Escreva 4 testes: 
1) Sucesso, 
2) Credencial expirada, 
3) Usuario não encontrado
4) Senha incorreta para o usuário encontrado.

#Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

#Entrega:
Suba seu código no Github e entregue o link até o dia 10 de maio 

---------------- / ---------------- / ---------------- / ---------------- / ---------------- / ---------------- /

# Pensamento Lógico e Análise de Problemas:

1) Decomposição:
    - Criar lista de usuarios com os dados: id, nome, email, senha e expirado
    - Receber login e senha do usuário
    - Comparar login e senha informado x cadastrado
    - Verificar se a credencial está expirada
    - Informar mensagem de sucesso "login foi realizado com sucesso"
    - Informar mensagem de falha "Credencias incorretas"

2) Identificar Padrões:
    - Realizar login
    - Comparação de dados válido x inválido

3) Representação de Dados:
    - id, nome, email, senha, expirado, data nascimento, endereço

4) Abstração:
    - data nascimento, endereço

# Pensamento Lógico:

1) Entradas:
    - Login realizado com email
    - Senha

2) Regras:
    - Login é realizado com sucesso caso exista um usuário com email e senha iguais aos informados
    - Login válido é realizado informando email e senha
    - Login inválido é quando o email ou a senha estão incorretos

3) Processamento:
    - Buscar usuário na lista pelo email informado
    - Verificar se a credencial está expirada (expirado true ou false)
    - Comparar a senha informada com a senha cadastrada
    - Definir a mensagem apropriada conforme resultado

4) Saída:
    - "Login realizado com sucesso" (email e senha corretos, credencial não expirada)
    - "Credenciais incorretas" (email não existe ou senha incorreta)

5) Algoritmo:
    - Buscar usuário na lista de usuários procurando por email
    - Se não encontrar: retornar "Credenciais incorretas"
    - Se encontrar: verificar se está expirado (true)
      - Se estiver expirado: retornar "Credencial expirada"
      - Se não: comparar a senha
        - Se correto: retornar "Login realizado com sucesso"
        - Se incorreto: retornar "Credenciais incorretas"

#Testes:
Escreva 4 testes: 

1) Sucesso:
    - email ok + senha ok + expirado false = Login realizado com sucesso

2) Credencial expirada:
    - email ok + senha ok + expirado true = Credencial expirada

3) Usuario não encontrado:
    - email errado + senha ok + expirado false = Credenciais incorretas: usuário não encontrado

4) Senha incorreta para o usuário encontrado.
    - email ok + senha errada + expirado false = Credenciais incorretas: senha incorreta
*/

// Criar a lista de usuários: id, nome, email, senha, expirado true/false
const usuarios = [
  {
    id: 1,
    nome: 'Jasminy Proença',
    email: 'jasminy.proenca@gmail.com',
    senha: '123456',
    expirado: false
  },
  {
    id: 2,
    nome: 'Marcos Paulo',
    email: 'mpsgar@gmail.com',
    senha: '123456',
    expirado: false
  },
  {
    id: 3,
    nome: 'Fernando Magalhães',
    email: 'nando@gmail.com',
    senha: '123456',
    expirado: true
  }
];

// Criar a Função para realizar Login:

export function fazerLogin(email, senha) {
    let mensagem = 'Credenciais incorretas: usuário não encontrado';

  usuarios.forEach(function(usuario) {
    // Se encontrou o usuário com o email
    if (usuario.email === email) {
    
    // Verificar se a credencial está expirada
    if (usuario.expirado === true) {
        mensagem = 'Credencial expirada';
    }

    // Se não está expirado, verificar a senha
    else if (usuario.senha === senha) {
        mensagem = 'Login realizado com sucesso';
    }
    
    // Senha incorreta
    else {
        mensagem = 'Credenciais incorretas: senha incorreta';
    }
}

});
    return mensagem;
}

/* Testando a função
console.log(fazerLogin('jasminy.proenca@gmail.com', '123456')); // Login realizado com sucesso
console.log(fazerLogin('nando@gmail.com', '123456')); // Credencial expirada
console.log(fazerLogin('email@inexistente.com', '123456')); // Credenciais incorretas: usuário não encontrado
console.log(fazerLogin('jasminy.proenca@gmail.com', 'senhaErrada')); // Credenciais incorretas: senha incorreta
*/