import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { User } from '@prisma/client-hercules';

@Injectable()
export class UserService {
  constructor(private readonly client: PrismaService) {}

  async createUser({
    userName,
    password,
    email,
  }: {
    userName: string;
    password: string;
    email: string;
  }): Promise<User> {
    return this.client.user.create({ data: { password, email, userName } });
  }

  async findUserByEmail({ email }: { email: string }): Promise<User> {
    return this.client.user.findUniqueOrThrow({ where: { email: email } });
  }

  async findUserById(id: number): Promise<User | null> {
    return this.client.user.findUniqueOrThrow({ where: { userId: id } });
  }

  async updatePassword(email: string, password: string) {
    return this.client.user.update({
      where: { email },
      data: { password },
    });
  }
}
