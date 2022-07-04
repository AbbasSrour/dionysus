import { Users } from "../entities/users.entity";
import config from "config";
import { AppDataSource } from "../utils/data-source.util";
import { RegisterUserInput, LoginUserSchema } from "../schemas/users.schema";
import { query } from "express";
import { RedisClient } from "../utils/redis.util";
import { signJwt } from "../utils/jwt.util";

const userRepository = AppDataSource.getRepository(Users);

export const createUser = async (input: RegisterUserInput): Promise<Users> => {
  const user = await AppDataSource.manager.create(Users, input);
  return (await AppDataSource.manager.save(user)) as Users;
};

export const findUserByEmail = async ({
  email,
}: {
  email: string;
}): Promise<Users | null> => {
  return await userRepository.findOneBy({ email: email });
};

export const findUserById = async (id: number): Promise<Users | null> => {
  return await userRepository.findOneBy({ userId: id });
};

export const findUser = async (object: object): Promise<Users | null> => {
  return await userRepository.findOneBy(object);
};

export const signTokens = async (user: Users) => {
  // create an entry for the user in the redis database
  await RedisClient.set(`${user.userId}`, JSON.stringify(user), {
    EX: config.get<number>("redisCacheExpiresIn") * 60,
  });

  const accessToken = await signJwt(
    { sub: user.userId },
    "accessTokenPrivateKey",
    {
      expiresIn: `${config.get<number>("accessTokenExpitesIn")}m`,
    }
  );

  const refreshToken = await signJwt(
    { sub: user.userId },
    "refreshTokenPrivateKey",
    {
      expiresIn: `${config.get<number>("refreshTokenPrivateKey")}m`,
    }
  );
  return { accessToken, refreshToken };
};
