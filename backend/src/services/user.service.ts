import { RegisterUserInput } from "../schemas/users.schema";
import { RedisClient } from "../utils/redis.util";
import { signJwt } from "../utils/jwt.util";
import { env } from "../utils/validate-env.util";
import { User } from "../../prisma/client";
import client from "../utils/prisma.util";
import {
  DecryptPassword,
  EncryptPassword,
  HashPassword,
  VerifyPassword,
} from "../utils/cryptography.util";
import crypto from "crypto";

export const createUser = async (input: RegisterUserInput): Promise<User> => {
  return client.user.create({ data: input });
};

export const findUserByEmail = async ({
  email,
}: {
  email: string;
}): Promise<User | null> => {
  return client.user.findUnique({ where: { email: email } });
};

export const findUserById = async (id: number): Promise<User | null> => {
  return client.user.findUnique({ where: { userId: id } });
};

export const findUser = async (object: object): Promise<User | null> => {
  return client.user.findFirst(object);
};

export const updateVerificationCode = async (
  user: User,
  code: string | null
) => {
  return client.user.update({
    where: { ...user },
    data: { verificationCode: code },
  });
};

export const updateVerified = async (user: User, verified: boolean) => {
  return client.user.update({
    where: { ...user },
    data: { verified },
  });
};

export const signTokens = async (user: User) => {
  await RedisClient.set(`${user.userId}`, JSON.stringify(user), {
    EX: env.REDIS_CACHE_EXPIRATION * 60,
  });
  const accessToken = await signJwt(
    { sub: user.userId },
    "accessTokenPrivateKey",
    {
      expiresIn: `${env.ACCESS_TOKEN_EXPIRATION}m`,
    }
  );
  const refreshToken = await signJwt(
    { sub: user.userId },
    "refreshTokenPrivateKey",
    {
      expiresIn: `${env.REFRESH_TOKEN_EXPIRATION}m`,
    }
  );
  return { accessToken, refreshToken };
};

export const comparePasswords = async (
  candidatePassword: string,
  encryptedPassword: string
) => {
  candidatePassword = await HashPassword(candidatePassword);
  const decryptedPassword = await DecryptPassword(
    encryptedPassword,
    env.ENC_KEY
  );
  return await VerifyPassword(candidatePassword, decryptedPassword);
};

export const createVerificationCode = async () => {
  const verificationCode = crypto.randomBytes(32).toString("hex");
  const hashedVerificationCode = crypto
    .createHash("sha256")
    .update(verificationCode)
    .digest("hex");
  return { verificationCode, hashedVerificationCode };
};

export const securePassword = async (
  password: string
): Promise<string | null> => {
  if (password) {
    const hashedPassword: string = await HashPassword(password);
    password = await EncryptPassword(hashedPassword, env.ENC_KEY);
  }
  return password;
};
