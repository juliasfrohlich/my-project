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
var _a = require('../../controllers/restaurant'), insertRestaurant = _a.insertRestaurant, getRestaurants = _a.getRestaurants, updatedRestaurant = _a.updatedRestaurant, deleteRestaurantByName = _a.deleteRestaurantByName;
var RestaurantModelMock = require('../mocks/restaurantModelMock');
describe('Entidade: Restaurant', function () {
    describe('Caso de uso: Criar um restaurante', function () {
        var restaurantExample = {
            Name: 'Picadinho',
            Adress: 'Rua teste, 39',
            Price: '31,10',
            Logotype: 'www.google.com',
        };
        test('Deve criar um restaurante e retornar um status Ok e as propriedades do restaurante criadas', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, insertRestaurant(restaurantExample, RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('ok');
                        expect(response[1][0].Adress).toBe(restaurantExample.Adress);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, insertRestaurant({})];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso haja erro com o banco de dados', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, insertRestaurant(restaurantExample, RestaurantModelMock, 'Erro de Banco de dados')];
                    case 1:
                        response = _a.sent();
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso não haja dados do restaurante especificado no banco de dados', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, insertRestaurant(RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
    });
    describe('Caso de uso: Deletar um restaurante', function () {
        var name = 'Risotinho';
        test('Deve deletar um restaurante do banco e retornar o nome do restaurante deletado', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, deleteRestaurantByName(name, RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('ok');
                        expect(response[1][0].name).toBe(name);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso não haja restaurante com o nome especificado no banco de dados', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, deleteRestaurantByName(RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, deleteRestaurantByName('Julia', {})];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
    });
    describe('Caso de uso: Atualizar um restaurante', function () {
        test('Deve atualizar um dado do restaurante e retornar as propriedades atualizadas do restaurante especificado', function () { return __awaiter(void 0, void 0, void 0, function () {
            var payload, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = { name: 'Bacalhones' };
                        return [4, updatedRestaurant('123', payload, RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('ok');
                        expect(response[1][0].name).toBe(payload.name);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso não haja restaurante com o ID especificado no banco de dados', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, updatedRestaurant({}, RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, updatedRestaurant('123', {})];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
    });
    describe('Caso de uso: Listar restaurantes', function () {
        test('Deve retornar os restaurantes cadastrados e suas propriedades', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getRestaurants(RestaurantModelMock)];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('ok');
                        expect(response[1]).toHaveProperty('length');
                        return [2];
                }
            });
        }); });
        test('Deve retornar um status "erro" e a mensagem de erro caso o model não possui o método necessário para execução', function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getRestaurants({})];
                    case 1:
                        response = _a.sent();
                        expect(response[0]).toBe('error');
                        expect(response[1]).toBeInstanceOf(Error);
                        return [2];
                }
            });
        }); });
    });
});
//# sourceMappingURL=restaurants.spec.js.map