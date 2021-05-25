var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.getProcesses = function getProcesses(model) {
    if (model === void 0) { model = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var pollingProcesses, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (model.find === undefined) {
                        throw new Error("O modelo passado não possui o método find()");
                    }
                    return [4, model.find()];
                case 1:
                    pollingProcesses = _a.sent();
                    if (pollingProcesses instanceof Error) {
                        throw new Error(pollingProcesses);
                    }
                    return [2, ['ok', pollingProcesses]];
                case 2:
                    err_1 = _a.sent();
                    return [2, ['error', err_1]];
                case 3: return [2];
            }
        });
    });
};
exports.insertProcess = function insertProcess(process, model, error) {
    if (process === void 0) { process = {}; }
    if (model === void 0) { model = {}; }
    if (error === void 0) { error = null; }
    return __awaiter(this, void 0, void 0, function () {
        var createdProcess, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (model.create === undefined) {
                        throw new Error("O modelo passado não possui o método updateOne()");
                    }
                    return [4, model.create(process, error)];
                case 1:
                    createdProcess = _a.sent();
                    return [2, ['ok', createdProcess]];
                case 2:
                    err_2 = _a.sent();
                    return [2, ['error', err_2]];
                case 3: return [2];
            }
        });
    });
};
exports.updatedProcess = function updatedProcess(id, payload, model, error) {
    if (id === void 0) { id = ''; }
    if (payload === void 0) { payload = {}; }
    if (model === void 0) { model = {}; }
    if (error === void 0) { error = null; }
    return __awaiter(this, void 0, void 0, function () {
        var updatedProcess_1, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (model.updateOne === undefined) {
                        throw new Error("O modelo passado não possui o método updateOne()");
                    }
                    return [4, model.updateOne(id, payload)];
                case 1:
                    updatedProcess_1 = _a.sent();
                    if (updatedProcess_1 instanceof Error) {
                        throw new Error(updatedProcess_1);
                    }
                    return [2, ['ok', updatedProcess_1]];
                case 2:
                    err_3 = _a.sent();
                    return [2, ['error', err_3]];
                case 3: return [2];
            }
        });
    });
};
exports.deleteProcessById = function deleteProcessById(id, model, error) {
    if (id === void 0) { id = ''; }
    if (model === void 0) { model = {}; }
    if (error === void 0) { error = null; }
    return __awaiter(this, void 0, void 0, function () {
        var deletedProcess, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (model.deleteOne === undefined) {
                        throw new Error("O modelo passado não possui o método deleteOne()");
                    }
                    return [4, model.deleteOne(id)];
                case 1:
                    deletedProcess = _a.sent();
                    if (deletedProcess instanceof Error) {
                        throw new Error(deletedProcess);
                    }
                    return [2, ['ok', deletedProcess]];
                case 2:
                    err_4 = _a.sent();
                    return [2, ['error', err_4]];
                case 3: return [2];
            }
        });
    });
};
//# sourceMappingURL=pollingProcess.js.map