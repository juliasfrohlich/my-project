class PollingProcessDataMock {
  constructor () {
    this.data = [
                {
                  Voters: 'Julia, Yumi, Ryu',
                  Limit: '1',
                  Restaurants: 'Risotinho, Camarones, Nona Pizzera',
                  Date: '05/05/2021',
                  Week: '1',
                  Votes: '3',
                  RestaurantWinner: 'Risotinho',
                  Status: 'Encerrado'
                },
                {
                  Votes: 'Julia, Yumi, Ryu',
                  Limit: '1',
                  Restaurants: 'Camarones, Nona Pizzera',
                  Date: '11/05/2021',
                  Week: '2',
                  Votes: '3',
                  RestaurantWinner: 'Nona Pizzera',
                  Status: 'Encerrado'
                },
                {
                  Votes: 'Julia, Yumi, Ryu',
                  Limit: '1',
                  Restaurants: 'Nona Pizzera',
                  Date: '20/05/2021',
                  Week: '3',
                  Votes: '3',
                  RestaurantWinner: '',
                  Status: 'Em andamento'
                },
              ]
}

  getData () {
    return this.data
  }

  setData (pollingProcess) {
    this.data.push(pollingProcess)
    return 
  }
}

module.exports = PollingProcessDataMock