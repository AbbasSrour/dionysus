import { HashPassword, VerifyPassword, EncryptPassword, DecryptPassword } from "../src/middleware/AuthMiddleware";
import crypto from "crypto";

describe('Cryptography', () => {

  const cases = [["helloworld"], ["Password$1"], ["Password$2"], [crypto.randomBytes(32).toString("utf8")]];

  test.each(cases)(
    "Given %p as password check hash ", async (password: string) => {
      const hashedPassword = await HashPassword(password);
      const verify = await VerifyPassword(password, hashedPassword);
      expect(verify).toBe(true);
    });

  test.each(cases)(
    "Given %p as password check if encryption is working", async (password: string) => {
      const key: string = await crypto.randomBytes(32).toString("hex");
      const encryptedPass = await EncryptPassword(password, key);
      const decryptedPass = await DecryptPassword(encryptedPass, key);
      expect(decryptedPass).toEqual(password);
    });

  test.each(cases)(
    "Given %p as password check if hashed password encryption and decryption is working", async (password: string) => {
      const key: string = await crypto.randomBytes(32).toString("hex");
      const hashedPassword = await HashPassword(password);
      const encryptedPass = await EncryptPassword(hashedPassword, key);
      const decryptedPass = await DecryptPassword(encryptedPass, key);
      expect(decryptedPass).toEqual(hashedPassword);
    });

})


