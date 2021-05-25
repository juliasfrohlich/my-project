var RestaurantDataMock = (function () {
    function RestaurantDataMock() {
        this.data = [
            {
                _id: '123',
                name: 'Risotinho',
                adress: 'Rua da tulipa, 32',
                price: '23,90',
                logotype: 'https://www.receitas-sem-fronteiras.com/media/dsc05531-2_crop.jpg/rh/risotinho-de-carne.jpg',
            },
            {
                _id: '324',
                name: 'Camarones',
                adress: 'Rua da margarida, 32',
                price: '40,90',
                logotype: 'https://www.receitasagora.com.br/wp-content/uploads/2019/05/camarao-a-provencal.jpg',
            },
            {
                _id: '258',
                name: 'Nona Pizzera',
                adress: 'Rua da babosa, 54',
                price: '39,90',
                logotype: 'https://media-cdn.tripadvisor.com/media/photo-s/18/95/04/2e/della-nonna-pizzeria.jpg',
            },
        ];
    }
    RestaurantDataMock.prototype.getData = function () {
        return this.data;
    };
    RestaurantDataMock.prototype.setData = function (restaurant) {
        this.data.push(restaurant);
        return;
    };
    return RestaurantDataMock;
}());
module.exports = RestaurantDataMock;
//# sourceMappingURL=restaurantDataMock.js.map