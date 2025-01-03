"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = void 0;
exports.saveUser = saveUser;
const user_1 = __importDefault(require("../../models/user"));
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByPk(id);
});
exports.getUserById = getUserById;
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.update(updateData, { where: { id } });
});
exports.updateUser = updateUser;
function saveUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.create({
                email: userData.email,
                password: userData.password, // Ideally, hash the password before saving
                externalId: userData.externalId,
            });
            return user;
        }
        catch (error) {
            throw new Error('Error saving user to database');
        }
    });
}
;
