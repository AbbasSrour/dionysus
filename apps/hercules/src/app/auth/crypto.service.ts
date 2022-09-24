import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  // takes an utf8 password, hashes it and returns the hash(utf8)=`salt(hex):password(hex)`
  async HashPassword(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');
    return `${salt}:${hashedPassword}`;
  }

  // takes a hashedPassword(utf8)=`salt(hex):hash(hex)` and a password(utf8)
  // and verifies if they are equal
  async VerifyPassword(password: string, storedPass: string): Promise<boolean> {
    const [oldSalt, oldHashedPassword] = storedPass.split(':');
    const hashedPassword = crypto
      .pbkdf2Sync(password, oldSalt, 10000, 64, 'sha512')
      .toString('hex');
    return hashedPassword === oldHashedPassword;
  }

  // takes a hashedPassword(utf8) = `salt(hex):hash(hex)` and a key(hex)
  // and returns an encryptedPass(utf8) = `iv(hex):encryptedHash(hex)`
  async EncryptPassword(
    hashedPasswordSalt: string,
    key: string
  ): Promise<string> {
    const keyBuffer: Buffer = Buffer.from(key, 'hex');
    const ivBuffer: Buffer = await crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, ivBuffer);
    cipher.setAutoPadding(true);
    const encrypted: Buffer = Buffer.concat([
      await cipher.update(hashedPasswordSalt),
      await cipher.final(),
    ]);
    return ivBuffer.toString('hex') + ':' + encrypted.toString('hex');
  }

  // takes an encryptedPass(utf8) = `iv(hex):encryptedHash(hex)` and a key(hex)
  // and returns the decryptedPass(utf8) = `salt(hex):hash(hex)`
  async DecryptPassword(
    encryptedPasswordIV: string,
    key: string
  ): Promise<string> {
    const [iv, encryptedPassword] = encryptedPasswordIV.split(':');
    const encryptedPassBuffer: Buffer = Buffer.from(encryptedPassword, 'hex');
    const keyBuffer: Buffer = Buffer.from(key, 'hex');
    const ivBuffer: Buffer = Buffer.from(iv, 'hex');
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      keyBuffer,
      ivBuffer
    );
    decipher.setAutoPadding(true);
    const decryptedPasswordBuffer: Buffer = Buffer.concat([
      await decipher.update(encryptedPassBuffer),
      await decipher.final(),
    ]);
    return decryptedPasswordBuffer.toString('utf8');
  }
}
