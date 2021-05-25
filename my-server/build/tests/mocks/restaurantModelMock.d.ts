declare const _exports: restaurantModelMock;
export = _exports;
declare class restaurantModelMock {
    restaurantDataMock: RestaurantDataMock;
    create(restaurant?: {}, error?: any): Promise<any>;
    find(error?: any): Promise<any>;
    updateOne(id?: string, dataToUpdate?: {}, error?: any): Promise<any>;
    deleteOne(name?: any, error?: any): Promise<any>;
}
import RestaurantDataMock = require("./restaurantDataMock");
//# sourceMappingURL=restaurantModelMock.d.ts.map