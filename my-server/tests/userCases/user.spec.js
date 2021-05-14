const {insertUser} = require('../../controllers/user');
const UserModelMock = require('../mocks/userModelMock')

describe('Entidade: User', () => {
  describe('Caso de uso: Criar um usuário', () => {
    
    const userExample = {
      Nome: 'Julia',
      Email: 'juliasfrohlich@hotmail.com',
      Senha: '123',
      Papel: 'Dev',
      Status: 'Ativa' ,
    }

    test('Deve criar um usuário e retornar um status Ok e as propriedades do usuário criadas', async () => { 
      
    const response = await insertUser(userExample, UserModelMock)
    expect(response[0]).toBe('ok')
    expect(response[1].Email).toBe(userExample.Email)
  })

    test('Deve criar um usuário e retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', async () => { 

    const response = await insertUser(userExample, UserModelMock, 'Erro de Banco de dados')
    console.log('response no teste:', response)
    expect(response[0]).toBe('error')
  })
})
  describe('Caso de uso: Deletar um usuário', () => {
    
  })
  describe('Caso de uso: Atualizar um usuário', () => {
    
  })
  describe('Caso de uso: Listar usuários', () => {
    
  })
}) 

