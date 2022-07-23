import crypto from "crypto";

// takes a utf8 password, hashes it and returns the hash(utf8)=`salt(hex):password(hex)`
export const HashPassword = async (password: string): Promise<string> => {
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = await crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha512")
        .toString("hex");
    const hashedPasswordSalt = `${salt}:${hashedPassword}`;
    return hashedPasswordSalt;
};

// takes a hashedPassword(utf8)=`salt(hex):hash(hex)` and a password(utf8)
// and verifies if they are equal
export const VerifyPassword = async (password: string, storedPass: string): Promise<boolean> => {
    const [oldSalt, oldHashedPassword] = storedPass.split(":");
    const hashedPassword = await crypto
        .pbkdf2Sync(password, oldSalt, 10000, 64, "sha512")
        .toString("hex");
    if (hashedPassword === oldHashedPassword) return true;
    else return false;
};

export const EncryptPassword = async (hashedPasswordSalt: string, key: string): Promise<string> => {
    const keyBuffer: Buffer = Buffer.from(key, "hex");
    const ivBuffer: Buffer = await crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", keyBuffer, ivBuffer);
    cipher.setAutoPadding(true);
    const crypted: Buffer = Buffer.concat([await cipher.update(hashedPasswordSalt), await cipher.final()]);
    const encryptPasswordIV: string = ivBuffer.toString("hex") + ":" + crypted.toString("hex");
    return encryptPasswordIV
};

// takes an encryptedPass(utf8) = `iv(hex):encryptedHash(hex)` and a key(hex)
// and returns the decryptedPass(utf8) = `salt(hex):hash(hex)`
export const DecryptPassword = async (encryptedPasswordIV: string, key: string): Promise<string> => {
    const [iv, encryptedPassword] = encryptedPasswordIV.split(":");
    const encryptedPassBuffer: Buffer = Buffer.from(encryptedPassword, "hex");
    const keyBuffer: Buffer = Buffer.from(key, "hex");
    const ivBuffer: Buffer = Buffer.from(iv, "hex");
    const decipher = crypto.createDecipheriv("aes-256-cbc", keyBuffer, ivBuffer);
    decipher.setAutoPadding(true);
    const decryptedPasswordBuffer: Buffer = Buffer.concat([
        await decipher.update(encryptedPassBuffer),
        await decipher.final(),
    ]);
    const decryptedPassword = decryptedPasswordBuffer.toString("utf8");
    return decryptedPassword;
};
