import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async check() {
    console.log('hello world');
    return { message: 'hello world' };
  }
}
