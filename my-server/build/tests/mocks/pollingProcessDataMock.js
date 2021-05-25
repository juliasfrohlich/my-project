var PollingProcessDataMock = (function () {
    function PollingProcessDataMock() {
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
        ];
    }
    PollingProcessDataMock.prototype.getData = function () {
        return this.data;
    };
    PollingProcessDataMock.prototype.setData = function (pollingProcess) {
        this.data.push(pollingProcess);
        return;
    };
    return PollingProcessDataMock;
}());
module.exports = PollingProcessDataMock;
//# sourceMappingURL=pollingProcessDataMock.js.map