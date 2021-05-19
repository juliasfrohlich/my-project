class RestaurantDataMock {
  constructor () {
    this.data = [
                {
                  _Id: '123',
                  Name: 'Risotinho',
                  Adress: 'Rua da tulipa, 32',
                  Price: '23,90',
                  Logotype: 'https://www.receitas-sem-fronteiras.com/media/dsc05531-2_crop.jpg/rh/risotinho-de-carne.jpg',
                },
                {
                  _Id: '324',
                  Name: 'Camarones',
                  Adress: 'Rua da margarida, 32',
                  Price: '40,90',
                  Logotype: 'https://www.receitasagora.com.br/wp-content/uploads/2019/05/camarao-a-provencal.jpg',
                },
                {
                  _Id: '258',
                  Name: 'Nona Pizzera',
                  Adress: 'Rua da babosa, 54',
                  Price: '39,90',
                  Logotype: 'https://media-cdn.tripadvisor.com/media/photo-s/18/95/04/2e/della-nonna-pizzeria.jpg',
                },
              ]
}

  getData () {
    return this.data
  }

  setData (restaurant) {
    this.data.push(restaurant)
    return 
  }
}

module.exports = RestaurantDataMock