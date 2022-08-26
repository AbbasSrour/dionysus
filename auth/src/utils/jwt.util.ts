import jwt, { SignOptions } from "jsonwebtoken";

import { env } from "./validate-env.util";

// TODO: Remeber to change the encoding of keys in the .env to hex
export const signJwt = async (
  payload: object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options: SignOptions
) => {
  let privateKey: string;
  if (keyName == "accessTokenPrivateKey")
    privateKey = Buffer.from(env.JWT_ACCESS_TOKEN_PRIVATE_KEY, "hex").toString(
      "ascii"
    );
  else
    privateKey = Buffer.from(env.JWT_REFRESH_TOKEN_PRIVATE_KEY, "hex").toString(
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
    let publicKey: string;
    if (keyName === "accessTokenPublicKey")
      publicKey = Buffer.from(env.JWT_ACCESS_TOKEN_PUBLIC_KEY, "hex").toString(
        "ascii"
      );
    else
      publicKey = Buffer.from(env.JWT_REFRESH_TOKEN_PUBLIC_KEY, "hex").toString(
        "ascii"
      );
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (error) {
    return null;
  }
};
