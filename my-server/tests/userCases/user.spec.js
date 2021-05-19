const {insertUser, getUsers, updatedUser, deleteUserByName} = require('../../controllers/user');
const userModelMock = require('../mocks/userModelMock');
const UserModelMock = require('../mocks/userModelMock')

describe('Entidade: User', () => {
  describe('Caso de uso: Criar um usuário', () => {
    
    const userExample = {
      Name: 'Julia',
      Email: 'juliasfrohlich@hotmail.com',
      Password: '123',
      Attribution: 'Dev',
      Status: 'Ativa' ,
    }

    test('Deve criar um usuário e retornar um status Ok e as propriedades do usuário criadas', async () => {  
    const response = await insertUser(userExample, UserModelMock)
    expect(response[0]).toBe('ok')
    expect(response[1].Email).toBe(userExample.Email)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await insertUser({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', async () => { 
      const response = await insertUser(userExample, UserModelMock, 'Erro de Banco de dados')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso não haja dados do usuário especificado no banco de dados', async () => { 
      const response = await insertUser({}, UserModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
})

  describe('Caso de uso: Deletar um usuário', () => {
    const name = 'Julia'
    test('Deve deletar um usuário do banco e retornar o nome do usuário deletado', async () => {  
      const response = await deleteUserByName(name, UserModelMock)
      console.log('response: ', response)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('name')
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja usuário com o nome especificado no banco de dados', async () => {  
      const response = await deleteUserByName(userModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await deleteUserByName('Julia', {})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
  })
  describe('Caso de uso: Atualizar um usuário', () => {
    
    test('Deve atualizar um dado do usuário e retornar as propriedades atualizadas do usuário especificado', async () => {  
      const payload = {
        _Id: '124',
        Name: 'Julia',
        Email: 'juliasfrohlich@hotmail.com',
        Password: '123',
        Attribution: 'Dev',
        Status: 'Ativa' ,
      }
      const response = await updatedUser(payload._Id, payload, UserModelMock)
      console.log('response: ', response)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja usuário com o ID especificado no banco de dados', async () => {  
      const response = await updatedUser({}, userModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await updatedUser('123', {})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
  })
  describe('Caso de uso: Listar usuários', () => {
    test('Deve retornar os usuários cadastrados e suas propriedades', async () => {  
      const response = await getUsers(UserModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await getUsers({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
  })
}) 

