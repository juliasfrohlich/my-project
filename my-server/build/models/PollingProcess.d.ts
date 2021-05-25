declare const _exports: {
    new (doc?: any): mongoose.Document<any, {}>;
    aggregate<R = any>(pipeline?: any[]): mongoose.Aggregate<R[]>;
    aggregate<R_1 = any>(pipeline: any[], cb: Function): Promise<R_1[]>;
    base: typeof mongoose;
    baseModelName: string;
    bulkWrite(writes: any[], options?: import("mongodb").CollectionBulkWriteOptions): Promise<import("mongodb").BulkWriteOpResultObject>;
    bulkWrite(writes: any[], options?: import("mongodb").CollectionBulkWriteOptions, cb?: (err: any, res: import("mongodb").BulkWriteOpResultObject) => void): void;
    collection: mongoose.Collection;
    count(callback?: (err: any, count: number) => void): mongoose.Query<number, mongoose.Document<any, {}>, {}>;
    count(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback?: (err: any, count: number) => void): mongoose.Query<number, mongoose.Document<any, {}>, {}>;
    countDocuments(callback?: (err: any, count: number) => void): mongoose.Query<number, mongoose.Document<any, {}>, {}>;
    countDocuments(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback?: (err: any, count: number) => void): mongoose.Query<number, mongoose.Document<any, {}>, {}>;
    create(doc: mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>): Promise<mongoose.Document<any, {}>>;
    create(docs: (mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>)[], options?: mongoose.SaveOptions): Promise<mongoose.Document<any, {}>[]>;
    create(docs: (mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>)[], callback: (err: mongoose.NativeError, docs: mongoose.Document<any, {}>[]) => void): void;
    create(doc: mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, callback: (err: mongoose.NativeError, doc: mongoose.Document<any, {}>) => void): void;
    create<DocContents = mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>>(docs: DocContents[], options?: mongoose.SaveOptions): Promise<mongoose.Document<any, {}>[]>;
    create<DocContents_1 = mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>>(doc: DocContents_1): Promise<mongoose.Document<any, {}>>;
    create<DocContents_2 = mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>>(...docs: DocContents_2[]): Promise<mongoose.Document<any, {}>[]>;
    create<DocContents_3 = mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>>(docs: DocContents_3[], callback: (err: mongoose.NativeError, docs: mongoose.Document<any, {}>[]) => void): void;
    create<DocContents_4 = mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>>(doc: DocContents_4, callback: (err: mongoose.NativeError, doc: mongoose.Document<any, {}>) => void): void;
    createCollection(options?: import("mongodb").CollectionCreateOptions): Promise<import("mongodb").Collection<mongoose.Document<any, {}>>>;
    createCollection(options: import("mongodb").CollectionCreateOptions, callback: (err: mongoose.NativeError, collection: import("mongodb").Collection<mongoose.Document<any, {}>>) => void): void;
    createIndexes(callback?: (err: any) => void): Promise<void>;
    createIndexes(options?: any, callback?: (err: any) => void): Promise<void>;
    db: mongoose.Connection;
    deleteMany(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError) => void): mongoose.Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, mongoose.Document<any, {}>, {}>;
    deleteMany(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback: (err: mongoose.NativeError) => void): mongoose.Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, mongoose.Document<any, {}>, {}>;
    deleteMany(callback: (err: mongoose.NativeError) => void): mongoose.Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, mongoose.Document<any, {}>, {}>;
    deleteOne(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError) => void): mongoose.Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, mongoose.Document<any, {}>, {}>;
    deleteOne(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback: (err: mongoose.NativeError) => void): mongoose.Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, mongoose.Document<any, {}>, {}>;
    deleteOne(callback: (err: mongoose.NativeError) => void): mongoose.Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, mongoose.Document<any, {}>, {}>;
    ensureIndexes(callback?: (err: any) => void): Promise<void>;
    ensureIndexes(options?: any, callback?: (err: any) => void): Promise<void>;
    events: NodeJS.EventEmitter;
    findById(id: any, projection?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: mongoose.Document<any, {}>) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOne(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, projection?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: mongoose.Document<any, {}>) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    hydrate(obj: any): mongoose.Document<any, {}>;
    init(callback?: (err: any) => void): Promise<mongoose.Document<any, {}>>;
    insertMany(doc: mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<mongoose.InsertManyResult>;
    insertMany(doc: mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, options?: mongoose.InsertManyOptions): Promise<mongoose.Document<any, {}>>;
    insertMany(docs: (mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>)[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<mongoose.InsertManyResult>;
    insertMany(docs: (mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>)[], options?: mongoose.InsertManyOptions): Promise<mongoose.Document<any, {}>[]>;
    insertMany(doc: mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, options?: mongoose.InsertManyOptions, callback?: (err: mongoose.NativeError, res: mongoose.Document<any, {}> | mongoose.InsertManyResult) => void): void;
    insertMany(docs: (mongoose.Document<any, {}> | mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>)[], options?: mongoose.InsertManyOptions, callback?: (err: mongoose.NativeError, res: mongoose.Document<any, {}>[] | mongoose.InsertManyResult) => void): void;
    listIndexes(callback: (err: mongoose.NativeError, res: any[]) => void): void;
    listIndexes(): Promise<any[]>;
    modelName: string;
    populate(docs: any[], options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: (err: any, res: mongoose.Document<any, {}>[]) => void): Promise<mongoose.Document<any, {}>[]>;
    populate(doc: any, options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: (err: any, res: mongoose.Document<any, {}>) => void): Promise<mongoose.Document<any, {}>>;
    syncIndexes(options?: Record<string, unknown>): Promise<string[]>;
    syncIndexes(options: Record<string, unknown>, callback: (err: mongoose.NativeError, dropped: string[]) => void): void;
    startSession(options?: import("mongodb").SessionOptions, cb?: (err: any, session: import("mongodb").ClientSession) => void): Promise<import("mongodb").ClientSession>;
    validate(callback?: (err: any) => void): Promise<void>;
    validate(optional: any, callback?: (err: any) => void): Promise<void>;
    validate(optional: any, pathsToValidate: string[], callback?: (err: any) => void): Promise<void>;
    watch(pipeline?: Record<string, unknown>[], options?: import("mongodb").ChangeStreamOptions): import("mongodb").ChangeStream<any>;
    $where(argument: string | Function): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    discriminators: {
        [name: string]: mongoose.Model<any, {}>;
    };
    translateAliases(raw: any): any;
    distinct(field: string, filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback?: (err: any, count: number) => void): mongoose.Query<any[], mongoose.Document<any, {}>, {}>;
    estimatedDocumentCount(options?: mongoose.QueryOptions, callback?: (err: any, count: number) => void): mongoose.Query<number, mongoose.Document<any, {}>, {}>;
    exists(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>): Promise<boolean>;
    exists(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback: (err: any, res: boolean) => void): void;
    find(callback?: (err: any, docs: mongoose.Document<any, {}>[]) => void): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    find(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, callback?: (err: any, docs: mongoose.Document<any, {}>[]) => void): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    find(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, projection?: any, options?: mongoose.QueryOptions, callback?: (err: any, docs: mongoose.Document<any, {}>[]) => void): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    findByIdAndDelete(id?: any, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findByIdAndRemove(id?: any, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findByIdAndUpdate(id: any, update: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options: mongoose.QueryOptions & {
        rawResult: true;
    }, callback?: (err: any, doc: import("mongodb").FindAndModifyWriteOpResultObject<mongoose.Document<any, {}>>, res: any) => void): mongoose.Query<import("mongodb").FindAndModifyWriteOpResultObject<mongoose.Document<any, {}>>, mongoose.Document<any, {}>, {}>;
    findByIdAndUpdate(id: any, update: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findByIdAndUpdate(id: any, update: mongoose.UpdateQuery<mongoose.Document<any, {}>>, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findByIdAndUpdate(id?: any, update?: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOneAndDelete(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOneAndRemove(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOneAndReplace(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, replacement: mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOneAndReplace(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, replacement?: mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOneAndUpdate(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, update: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options: mongoose.QueryOptions & {
        rawResult: true;
    }, callback?: (err: any, doc: import("mongodb").FindAndModifyWriteOpResultObject<mongoose.Document<any, {}>>, res: any) => void): mongoose.Query<import("mongodb").FindAndModifyWriteOpResultObject<mongoose.Document<any, {}>>, mongoose.Document<any, {}>, {}>;
    findOneAndUpdate(filter: mongoose.FilterQuery<mongoose.Document<any, {}>>, update: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    findOneAndUpdate(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, update?: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, doc: mongoose.Document<any, {}>, res: any) => void): mongoose.Query<mongoose.Document<any, {}>, mongoose.Document<any, {}>, {}>;
    geoSearch(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, options?: mongoose.GeoSearchOptions, callback?: (err: mongoose.NativeError, res: mongoose.Document<any, {}>[]) => void): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    mapReduce<Key, Value>(o: mongoose.MapReduceOptions<mongoose.Document<any, {}>, Key, Value>, callback?: (err: any, res: any) => void): Promise<any>;
    remove(filter?: any, callback?: (err: mongoose.NativeError) => void): mongoose.Query<any, mongoose.Document<any, {}>, {}>;
    replaceOne(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, replacement?: mongoose._AllowStringsForIds<mongoose.LeanDocument<mongoose.Document<any, {}>>>, options?: mongoose.QueryOptions, callback?: (err: any, res: any) => void): mongoose.Query<any, mongoose.Document<any, {}>, {}>;
    schema: mongoose.Schema<mongoose.Document<any, {}>, mongoose.Model<any, any>, undefined>;
    update(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, update?: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, res: any) => void): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.Document<any, {}>, {}>;
    updateMany(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, update?: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, res: any) => void): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.Document<any, {}>, {}>;
    updateOne(filter?: mongoose.FilterQuery<mongoose.Document<any, {}>>, update?: mongoose.UpdateQuery<mongoose.Document<any, {}>>, options?: mongoose.QueryOptions, callback?: (err: any, res: any) => void): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.Document<any, {}>, {}>;
    where(path: string, val?: any): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    where(obj: object): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    where(): mongoose.Query<mongoose.Document<any, {}>[], mongoose.Document<any, {}>, {}>;
    addListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    on(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    once(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    off(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    removeAllListeners(event?: string | symbol): mongoose.Model<mongoose.Document<any, {}>, {}>;
    setMaxListeners(n: number): mongoose.Model<mongoose.Document<any, {}>, {}>;
    getMaxListeners(): number;
    listeners(event: string | symbol): Function[];
    rawListeners(event: string | symbol): Function[];
    emit(event: string | symbol, ...args: any[]): boolean;
    listenerCount(event: string | symbol): number;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<mongoose.Document<any, {}>, {}>;
    eventNames(): (string | symbol)[];
    discriminator<D extends mongoose.Document<any, {}>>(name: string | number, schema: mongoose.Schema<D, mongoose.Model<any, any>, undefined>, value?: string): mongoose.Model<D, {}>;
    discriminator<T extends mongoose.Document<any, {}>, U extends mongoose.Model<T, {}>>(name: string | number, schema: mongoose.Schema<T, U, undefined>, value?: string): U;
};
export = _exports;
import mongoose = require("mongoose");
//# sourceMappingURL=PollingProcess.d.ts.map