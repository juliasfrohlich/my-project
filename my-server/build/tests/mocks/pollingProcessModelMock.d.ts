declare const _exports: pollingProcessModelMock;
export = _exports;
declare class pollingProcessModelMock {
    pollingProcessDataMock: PollingProcessDataMock;
    create(pollingProcess?: {}, error?: any): Promise<any>;
    find(error?: any): Promise<any>;
    updateOne(id?: string, dataToUpdate?: {}, error?: any): Promise<any>;
    deleteOne(id?: string, error?: any): Promise<any>;
}
import PollingProcessDataMock = require("./pollingProcessDataMock");
//# sourceMappingURL=pollingProcessModelMock.d.ts.map