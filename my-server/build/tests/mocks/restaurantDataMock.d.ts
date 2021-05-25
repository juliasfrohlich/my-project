export = RestaurantDataMock;
declare class RestaurantDataMock {
    data: {
        _id: string;
        name: string;
        adress: string;
        price: string;
        logotype: string;
    }[];
    getData(): {
        _id: string;
        name: string;
        adress: string;
        price: string;
        logotype: string;
    }[];
    setData(restaurant: any): void;
}
//# sourceMappingURL=restaurantDataMock.d.ts.map