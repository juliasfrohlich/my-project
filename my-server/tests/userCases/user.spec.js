const {insertUser} = require('../../controllers/user');
const {getUsers} = require('../../controllers/user');
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
      expect(response[0]).toBe('error')
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso não haja dados do usuário especificado no banco de dados', async () => { 
      const response = await insertUser({}, UserModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
})

describe('Caso de uso: Deletar um usuário', () => {
    
  })
  describe('Caso de uso: Atualizar um usuário', () => {
    
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

