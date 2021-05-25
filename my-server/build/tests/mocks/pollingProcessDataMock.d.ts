export = PollingProcessDataMock;
declare class PollingProcessDataMock {
    data: {
        _id: string;
        voters: string;
        limit: string;
        restaurants: string;
        date: string;
        week: string;
        votes: string;
        restaurantWinner: string;
        status: string;
    }[];
    getData(): {
        _id: string;
        voters: string;
        limit: string;
        restaurants: string;
        date: string;
        week: string;
        votes: string;
        restaurantWinner: string;
        status: string;
    }[];
    setData(pollingProcess: any): void;
}
//# sourceMappingURL=pollingProcessDataMock.d.ts.map