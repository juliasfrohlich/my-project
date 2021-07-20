import {
  createUser, 
  getUsers, 
  updatedUser, 
  deleteUserByName
} from'../../controllers/user';
import UserModelMock from '../mocks/userModelMock'

describe('Entidade: User', () => {
  describe('Caso de uso: Criar um usuário', () => {
    
    const userExample = {
      name: 'Julia',
      email: 'juliasfrohlich@hotmail.com',
      password: '123',
      attribution: 'Dev',
      status: 'Ativa' ,
    }

    test('Deve criar um usuário e retornar um status Ok e as propriedades do usuário criadas', async () => {  
    const response = await createUser(userExample, UserModelMock)
    expect(response[0]).toBe('ok')
    expect(response[1][0].Email).toBe(userExample.Email)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await createUser({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', async () => { 
      const response = await createUser(userExample, UserModelMock, 'Erro de Banco de dados')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso não haja dados do usuário especificado no banco de dados', async () => { 
      const response = await createUser({}, UserModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
})

  describe('Caso de uso: Deletar um usuário', () => {
    const name = 'Julia'
    test('Deve deletar um usuário do banco e retornar o nome do usuário deletado', async () => {  
      const response = await deleteUserByName(name, UserModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0].name).toBe(name)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja usuário com o nome especificado no banco de dados', async () => {  
      const response = await deleteUserByName(UserModelMock)
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
      const payload = {name: 'Julião'} 
      const response = await updatedUser('123', payload, UserModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0].name).toBe(payload.name)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja usuário com o ID especificado no banco de dados', async () => {  
      const response = await updatedUser({}, UserModelMock)
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

