class PollingProcessDataMock {
  constructor () {
    this.data = [
                {
                  _id: '123',
                  voters: 'Julia, Yumi, Ryu',
                  limit: '1',
                  restaurants: 'Risotinho, Camarones, Nona Pizzera',
                  date: '05/05/2021',
                  week: '1',
                  votes: '3',
                  restaurantWinner: 'Risotinho',
                  status: 'Encerrado'
                },
                {
                  _id: '258',
                  voters: 'Julia, Yumi, Ryu',
                  limit: '1',
                  restaurants: 'Camarones, Nona Pizzera',
                  date: '11/05/2021',
                  week: '2',
                  votes: '3',
                  restaurantWinner: 'Nona Pizzera',
                  status: 'Encerrado'
                },
                {
                  _id: '369',
                  voters: 'Julia, Yumi, Ryu',
                  limit: '1',
                  restaurants: 'Nona Pizzera',
                  date: '20/05/2021',
                  week: '3',
                  votes: '3',
                  restaurantWinner: '',
                  status: 'Em andamento'
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