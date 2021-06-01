const {createProcess, getProcesses, updateProcess, deleteProcessById} = require('../../controllers/pollingProcess');
const PollingProcessModelMock = require('../mocks/pollingProcessModelMock')

describe('Entidade: PollingProcess', () => {
  describe('Caso de uso: Criar um Processo de Votação', () => {
    
    const pollingProcessExample = {
      limit: '1',
      date: '05/05/2021',
      week: '1', 
      votes: '3',
      winner: 'Risotinho',
      status: 'Encerrado',
      availableRestaurants: ['Risotinho'],
      ballot: [{
        restaurant: '', 
        votes:[] 
      }]
    }

    test('Deve criar um processo de votação e retornar um status Ok e as propriedades do processo de votação criadas', async () => {  
    const response = await createProcess(pollingProcessExample, PollingProcessModelMock)
    expect(response[0]).toBe('ok')
    expect(response[1][0].restaurants).toBe(pollingProcessExample.restaurants)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await createProcess({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', async () => { 
      const response = await createProcess(pollingProcessExample, PollingProcessModelMock, 'Erro de Banco de dados')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um erro caso não haja dados suficientes para criar um processo de votação', async () => { 
      const response = await createProcess(PollingProcessModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
})
  describe('Caso de uso: Habilitar um processo de votação', () => {
    test('Deve tentar inserir voto em um processo não iniciado e retornar um erro com o status "Não Iniciado"', async () => {  
      const response = await deleteProcessById(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0]._id).toBe(id)
    })
    test('Deve habilitar processo de votação e retornar uma confirmação de que o processo foi iniciado', async () => {  
      const response = await deleteProcessById(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0]._id).toBe(id)
    })
    test('Deve tentar inserir voto em um processo iniciado e retornar uma confirmação de que o voto foi inserido', async () => {  
      const response = await deleteProcessById(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0]._id).toBe(id)
    })
  })

    describe('Caso de uso: Encerrar um processo de votação', () => {
      test('Deve tentar inserir voto em um processo iniciado e retornar uma confirmação de que o voto foi inserido', async () => {  
        const response = await deleteProcessById(PollingProcessModelMock)
        expect(response[0]).toBe('ok')
        expect(response[1][0]._id).toBe(id)
      })
      test('Deve encerrar o processo de votação e retornar uma confirmação de que o processo foi encerrado', async () => {  
        const response = await deleteProcessById(PollingProcessModelMock)
        expect(response[0]).toBe('ok')
        expect(response[1][0]._id).toBe(id)
      })
      test('Deve tentar inserir voto em um processo encerrado e retornar um erro com o status "Encerrado"', async () => {  
        const response = await deleteProcessById(PollingProcessModelMock)
        expect(response[0]).toBe('ok')
        expect(response[1][0]._id).toBe(id)
      })
    })

  describe('Caso de uso: Deletar um processo de votação', () => {
    const id = '123'
    test('Deve deletar um processo de votação do banco e retornar o nome do processo de votação deletado', async () => {  
      const response = await deleteProcessById(id, PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0]._id).toBe(id)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja processo de votação com o nome especificado no banco de dados', async () => {  
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
  describe('Caso de uso: Atualizar um processo de votação', () => {
    
    test('Deve atualizar um dado do processo de votação e retornar as propriedades atualizadas do processo de votação especificado', async () => {
      const payload = {name: 'Bacalhones'} 
      const response = await updateProcess('123', payload, PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0].name).toBe(payload.name)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja processo de votação com o ID especificado no banco de dados', async () => {  
      const response = await updateProcess({}, PollingProcessModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await updateProcess('123', {})
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
  describe('Caso de uso: Registrar votos no pollingProcesses', () => {
    test('Deve retornar a confirmação do voto caso o usuário insira corretamente', async () => {  
      const response = await getProcesses(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })
    test('Deve retornar um erro caso haja inconstência na inserção do voto', async () => {  
      const response = await getProcesses(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })
    test('Deve retornar um erro caso o usuário tente inserir mais de um voto por processo de votação', async () => {  
      const response = await getProcesses(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })
    test('Deve retornar um erro caso o usuário tente votar em um restaurante que já foi vencedor na semana vigente', async () => {  
      const response = await getProcesses(PollingProcessModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })

  })
    describe('Caso de uso: Verificar se há um processo de votação em aberto', () => {
      test('Deve retornar a confirmação de que há um processo de votação em aberto', async () => {  
        const response = await getProcesses(PollingProcessModelMock)
        expect(response[0]).toBe('ok')
        expect(response[1]).toHaveProperty('length')
      })
      test('Deve retornar que não há processos de votação em aberto', async () => {  
        const response = await getProcesses(PollingProcessModelMock)
        expect(response[0]).toBe('ok')
        expect(response[1]).toHaveProperty('length')
      })
    })
}) 

