import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";

// TODO: Remeber to change the encoding of keys in the .env to hex
export const signJwt = async (
  payload: object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options: SignOptions
) => {
  const privateKey = Buffer.from(config.get<string>(keyName), "hex").toString(
    "ascii"
  );
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = <T>(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null => {
  try {
    const publicKey = Buffer.from(config.get<string>(keyName), "hex").toString(
      "ascii"
    );
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (error) {
    return null;
  }
};
