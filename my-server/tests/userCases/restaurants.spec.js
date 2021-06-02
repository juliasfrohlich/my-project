const {insertRestaurant, getRestaurants, updatedRestaurant, deleteRestaurantByName} = require('../../controllers/restaurant');
const RestaurantModelMock = require('../mocks/restaurantModelMock')

describe('Entidade: Restaurant', () => {
  describe('Caso de uso: Criar um restaurante', () => {
    
    const restaurantExample = {
      name: 'Picadinho',
      adress: 'Rua teste, 39',
      price: '31,10',
      logotype: 'www.google.com',
    }

    test('Deve criar um restaurante e retornar um status Ok e as propriedades do restaurante criadas', async () => {  
    const response = await insertRestaurant(restaurantExample, RestaurantModelMock)
    expect(response[0]).toBe('ok')
    expect(response[1][0].Adress).toBe(restaurantExample.Adress)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await insertRestaurant({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', async () => { 
      const response = await insertRestaurant(restaurantExample, RestaurantModelMock, 'Erro de Banco de dados')
      expect(response[1]).toBeInstanceOf(Error)
  })

    test('Deve retornar um status "erro" e a mensagem de erro caso não haja dados do restaurante especificado no banco de dados', async () => { 
      const response = await insertRestaurant(RestaurantModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
})

  describe('Caso de uso: Deletar um restaurante', () => {
    const name = 'Risotinho'
    test('Deve deletar um restaurante do banco e retornar o nome do restaurante deletado', async () => {  
      const response = await deleteRestaurantByName(name, RestaurantModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0].name).toBe(name)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja restaurante com o nome especificado no banco de dados', async () => {  
      const response = await deleteRestaurantByName(RestaurantModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await deleteRestaurantByName('Julia', {})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
  })
  describe('Caso de uso: Atualizar um restaurante', () => {
    
    test('Deve atualizar um dado do restaurante e retornar as propriedades atualizadas do restaurante especificado', async () => {
      const payload = {name: 'Bacalhones'} 
      const response = await updatedRestaurant('123', payload, RestaurantModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1][0].name).toBe(payload.name)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso não haja restaurante com o ID especificado no banco de dados', async () => {  
      const response = await updatedRestaurant({}, RestaurantModelMock)
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => {  
      const response = await updatedRestaurant('123', {})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
    })
  })
  describe('Caso de uso: Listar restaurantes', () => {
    test('Deve retornar os restaurantes cadastrados e suas propriedades', async () => {  
      const response = await getRestaurants(RestaurantModelMock)
      expect(response[0]).toBe('ok')
      expect(response[1]).toHaveProperty('length')
    })

    test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', async () => { 
      const response = await getRestaurants({})
      expect(response[0]).toBe('error')
      expect(response[1]).toBeInstanceOf(Error)
  })
  })
}) 

