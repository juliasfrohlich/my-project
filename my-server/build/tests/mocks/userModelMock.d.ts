declare const _exports: userModelMock;
export = _exports;
declare class userModelMock {
    userDataMock: UserDataMock;
    create(user?: {}, error?: any): Promise<any>;
    find(error?: any): Promise<any>;
    updateOne(id?: string, dataToUpdate?: {}, error?: any): Promise<any>;
    deleteOne(name?: any, error?: any): Promise<any>;
}
import UserDataMock = require("./usersDataMock");
//# sourceMappingURL=userModelMock.d.ts.map