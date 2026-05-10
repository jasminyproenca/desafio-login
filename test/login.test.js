import { fazerLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testando a Função de Realizar Login', function () {
    it('Teste 01: Login realizado com sucesso', function () {
        // Arrange: O que eu preciso testar
        const emailCorreto = 'jasminy.proenca@gmail.com'
        const senhaCorreta = '123456';

        // Act: Chamar a função
        const retornoDaFuncao = fazerLogin(emailCorreto, senhaCorreta);

        // Assert: Comparar o resultado real com o esperado
        assert.equal(retornoDaFuncao, 'Login realizado com sucesso');
    });

    it('Teste 02: Credencial expirada', function () {
        // Arrange: O que eu preciso testar
        const emailCorreto = 'nando@gmail.com'
        const senhaCorreta = '123456';

        // Act: Chamar a função
        const retornoDaFuncao = fazerLogin(emailCorreto, senhaCorreta);

        // Assert: Comparar o resultado real com o esperado
        assert.equal(retornoDaFuncao, 'Credencial expirada');
    });

    it('Teste 03: Usuário não encontrado', function () {
        // Arrange: O que eu preciso testar
        const emailCorreto = 'usuarioinexistente@email.com'
        const senhaCorreta = '123456';

        // Act: Chamar a função
        const retornoDaFuncao = fazerLogin(emailCorreto, senhaCorreta);

        // Assert: Comparar o resultado real com o esperado
        assert.equal(retornoDaFuncao, 'Credenciais incorretas: usuário não encontrado');
    });

    it('Teste 04: Senha incorreta para o usuário encontrado.', function () {
        // Arrange: O que eu preciso testar
        const emailCorreto = 'jasminy.proenca@gmail.com'
        const senhaCorreta = '478932';

        // Act: Chamar a função
        const retornoDaFuncao = fazerLogin(emailCorreto, senhaCorreta);

        // Assert: Comparar o resultado real com o esperado
        assert.equal(retornoDaFuncao, 'Credenciais incorretas: senha incorreta');
    });
});