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
var UserDataMock = require('./usersDataMock');
var userModelMock = (function () {
    function userModelMock() {
        this.userDataMock = new UserDataMock();
    }
    userModelMock.prototype.create = function (user, error) {
        if (user === void 0) { user = {}; }
        if (error === void 0) { error = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (error) {
                        throw new Error(error);
                    }
                    else if (user === {}) {
                        throw new Error('As informações são insuficientes para criar um usuário.');
                    }
                    else {
                        return [2, new Promise(function (resolve) {
                                resolve([user]);
                            })];
                    }
                }
                catch (err) {
                    return [2, err];
                }
                return [2];
            });
        });
    };
    userModelMock.prototype.find = function (error) {
        if (error === void 0) { error = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    if (error) {
                        throw new Error(error);
                    }
                    else {
                        return [2, new Promise(function (resolve) {
                                resolve(_this.userDataMock.getData());
                            })];
                    }
                }
                catch (err) {
                    return [2, err];
                }
                return [2];
            });
        });
    };
    userModelMock.prototype.updateOne = function (id, dataToUpdate, error) {
        if (id === void 0) { id = ''; }
        if (dataToUpdate === void 0) { dataToUpdate = {}; }
        if (error === void 0) { error = null; }
        return __awaiter(this, void 0, void 0, function () {
            var fieldToUpdate, users, userToUpdate, updatedUser_1;
            return __generator(this, function (_a) {
                try {
                    if (error) {
                        throw new Error(error);
                    }
                    else {
                        fieldToUpdate = Object.keys(dataToUpdate)[0];
                        users = this.userDataMock.getData();
                        userToUpdate = users.filter(function (user) { return user._id === id; });
                        updatedUser_1 = userToUpdate[0];
                        updatedUser_1[fieldToUpdate] = dataToUpdate[fieldToUpdate];
                        return [2, new Promise(function (resolve) {
                                resolve([updatedUser_1]);
                            })];
                    }
                }
                catch (err) {
                    return [2, err];
                }
                return [2];
            });
        });
    };
    userModelMock.prototype.deleteOne = function (name, error) {
        if (name === void 0) { name = null; }
        if (error === void 0) { error = null; }
        return __awaiter(this, void 0, void 0, function () {
            var users, deletedUser_1;
            return __generator(this, function (_a) {
                try {
                    if (error) {
                        throw new Error(error);
                    }
                    else {
                        users = this.userDataMock.getData();
                        deletedUser_1 = users.filter(function (user) { return user.name === name; });
                        return [2, new Promise(function (resolve) {
                                resolve(deletedUser_1);
                            })];
                    }
                }
                catch (err) {
                    return [2, err];
                }
                return [2];
            });
        });
    };
    return userModelMock;
}());
module.exports = new userModelMock();
//# sourceMappingURL=userModelMock.js.map