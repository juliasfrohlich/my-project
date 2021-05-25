export = UserDataMock;
declare class UserDataMock {
    data: {
        _id: string;
        name: string;
        email: string;
        password: string;
        attribution: string;
        status: string;
    }[];
    getData(): {
        _id: string;
        name: string;
        email: string;
        password: string;
        attribution: string;
        status: string;
    }[];
    setData(user: any): void;
}
//# sourceMappingURL=usersDataMock.d.ts.map