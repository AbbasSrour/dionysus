"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthMiddleware_1 = require("../src/middleware/AuthMiddleware");
const crypto_1 = __importDefault(require("crypto"));
describe('Cryptography', () => {
    const cases = [["helloworld"], ["Password$1"], ["Password$2"], [crypto_1.default.randomBytes(32).toString("utf8")]];
    test.each(cases)("Given %p as password check hash ", async (password) => {
        const hashedPassword = await (0, AuthMiddleware_1.HashPassword)(password);
        const verify = await (0, AuthMiddleware_1.VerifyPassword)(password, hashedPassword);
        expect(verify).toBe(true);
    });
    test.each(cases)("Given %p as password check if encryption is working", async (password) => {
        const key = await crypto_1.default.randomBytes(32).toString("hex");
        const encryptedPass = await (0, AuthMiddleware_1.EncryptPassword)(password, key);
        const decryptedPass = await (0, AuthMiddleware_1.DecryptPassword)(encryptedPass, key);
        expect(decryptedPass).toEqual(password);
    });
    test.each(cases)("Given %p as password check if hashed password encryption and decryption is working", async (password) => {
        const key = await crypto_1.default.randomBytes(32).toString("hex");
        const hashedPassword = await (0, AuthMiddleware_1.HashPassword)(password);
        const encryptedPass = await (0, AuthMiddleware_1.EncryptPassword)(hashedPassword, key);
        const decryptedPass = await (0, AuthMiddleware_1.DecryptPassword)(encryptedPass, key);
        expect(decryptedPass).toEqual(hashedPassword);
    });
});
