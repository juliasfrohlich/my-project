const {insertProcess, getProcesses, updatedProcess, deleteProcessById} = require('../../controllers/pollingProcess');
const PollingProcessModelMock = require('../mocks/pollingProcessModelMock')

describe('Entidade: PollingProcess', () => {
  describe('Caso de uso: Criar um Processo de Votação', () => {
    
    const pollingProcessExample = {
      voters: 'Julia, Yumi, Ryu',
      limit: '1',
      restaurants: 'Risotinho, Camarones, Nona Pizzera',
      date: '05/05/2021',
      week: '1',
      votes: '3',
      restaurantWinner: 'Risotinho',
      status: 'Encerrado'
    }

    test('Deve criar um pollingProcesse e retornar um status Ok e as propriedades do pollingProcesse criadas', async () => {  
    const response = await insertProcess(pollingProcessExample, PollingProcessModelMock)
    expect(response[0]).toBe('ok')
    expect(response[1][0].restaurants).toBe(pollingProcessExample.restaurants)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await insertProcess({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', async () => { 
      const response = await insertProcess(pollingProcessExample, PollingProcessModelMock, 'Erro de Banco de dados')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso não haja dados do pollingProcesse especificado no banco de dados', async () => { 
      const response = await insertProcess(PollingProcessModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
})

  describe('Caso de uso: Deletar um pollingProcesse', () => {
    const id = '123'
    test('Deve deletar um pollingProcesse do banco e retornar o nome do pollingProcesse deletado', async () => {  
      const response = await deleteProcessById(id, PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0]._id).toBe(id)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja pollingProcesse com o nome especificado no banco de dados', async () => {  
      const response = await deleteProcessById(PollingProcessModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await deleteProcessById('Julia', {})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
  })
  describe('Caso de uso: Atualizar um pollingProcesse', () => {
    
    test('Deve atualizar um dado do pollingProcesse e retornar as propriedades atualizadas do pollingProcesse especificado', async () => {
      const payload = {name: 'Bacalhones'} 
      const response = await updatedProcess('123', payload, PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0].name).toBe(payload.name)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja pollingProcesse com o ID especificado no banco de dados', async () => {  
      const response = await updatedProcess({}, PollingProcessModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await updatedProcess('123', {})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
  })
  describe('Caso de uso: Listar pollingProcesses', () => {
    test('Deve retornar os pollingProcesses cadastrados e suas propriedades', async () => {  
      const response = await getProcesses(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await getProcesses({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
  })
}) 

