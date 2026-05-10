# 🔐 Desafio Login

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-FF6B35?style=for-the-badge&logo=mocha&logoColor=white)

**Desafio de lógica de programação com implementação de testes unitários**

</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como um **desafio prático de lógica de programação**, com foco em:

- Implementar uma **função de autenticação** com múltiplos cenários de validação
- Aplicar **pensamento computacional**: decomposição, padrões, abstração e algoritmo
- Escrever **testes unitários** utilizando o padrão **AAA** (Arrange, Act, Assert)
- Gerar **relatórios de testes** com o Mochawesome

---

## 🧠 Lógica da Função `fazerLogin`

A função recebe **email** e **senha** e percorre a lista de usuários retornando uma mensagem conforme o cenário:

```
fazerLogin(email, senha) → mensagem
```

### Fluxo de Decisão

```
📥 Entrada: email + senha
      │
      ▼
┌─────────────────────┐
│ Usuário encontrado? │──── ❌ NÃO ──→ "Credenciais incorretas: usuário não encontrado"
└─────────────────────┘
      │ ✅ SIM
      ▼
┌──────────────────────┐
│ Credencial expirada? │──── ✅ SIM ──→ "Credencial expirada"
└──────────────────────┘
      │ ❌ NÃO
      ▼
┌─────────────────┐
│   Senha correta? │──── ❌ NÃO ──→ "Credenciais incorretas: senha incorreta"
└─────────────────┘
      │ ✅ SIM
      ▼
"Login realizado com sucesso"
```

---

## 🧪 Cenários de Teste

Os testes foram escritos seguindo o padrão **AAA (Arrange → Act → Assert)**:

| # | Cenário | Entrada | Resultado Esperado |
|---|---------|---------|-------------------|
| 01 | ✅ Login com sucesso | Email ✔ + Senha ✔ + Não expirado | `"Login realizado com sucesso"` |
| 02 | ⏳ Credencial expirada | Email ✔ + Senha ✔ + Expirado | `"Credencial expirada"` |
| 03 | 👤 Usuário não encontrado | Email ✘ + Senha qualquer | `"Credenciais incorretas: usuário não encontrado"` |
| 04 | 🔑 Senha incorreta | Email ✔ + Senha ✘ | `"Credenciais incorretas: senha incorreta"` |

---

## 🗂️ Estrutura do Projeto

```
desafio-login/
├── 📁 src/
│   └── login.js            # Lógica da função fazerLogin + lista de usuários
├── 📁 test/
│   └── login.test.js       # Testes unitários (Mocha + Node:assert)
├── 📁 mochawesome-report/  # Relatório HTML gerado automaticamente
├── package.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jasminyproenca/desafio-login.git

# Acesse a pasta do projeto
cd desafio-login

# Instale as dependências
npm install
```

### Executando os Testes

```bash
npm test
```

Após rodar o comando, um **relatório HTML interativo** será gerado automaticamente na pasta `mochawesome-report/`.

---

## 📊 Relatório de Testes (Mochawesome)

O projeto utiliza o **Mochawesome** para gerar relatórios visuais dos testes.

Após executar `npm test`, abra o arquivo:

```
mochawesome-report/mochawesome.html
```

O relatório exibe:
- ✅ Total de testes passando
- ❌ Testes com falha (se houver)
- ⏱️ Tempo de execução
- 📋 Detalhes de cada cenário testado

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|------------|--------|
| **JavaScript (ESModules)** | Linguagem principal do projeto |
| **Node.js** | Ambiente de execução |
| **Mocha** | Framework de testes unitários |
| **Mochawesome** | Geração de relatórios HTML dos testes |
| **Node:assert** | Biblioteca nativa de asserções |

---

## 📚 Conceitos Aplicados

- 🧩 **Pensamento Computacional**: Decomposição do problema, identificação de padrões, abstração e definição de algoritmo
- 🧪 **Testes Unitários**: Cobertura dos 4 cenários principais da função
- 📐 **Padrão AAA**: Arrange (preparar), Act (executar), Assert (verificar)
- 📦 **ESModules**: Uso de `import`/`export` nativos do JavaScript
- 📋 **Relatório de Testes**: Geração automatizada com Mochawesome

---

## 👩‍💻 Autora

<div align="center">

**Jasminy Proença**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jasminyproenca)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jasminyproenca)

</div>

---

<div align="center">

*Desafio realizado como parte da avaliação da disciplina de Programação para Automação de Testes*

</div>
