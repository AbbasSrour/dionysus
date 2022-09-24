import { Test, TestingModule } from '@nestjs/testing';

import { AthenaController } from './athena.controller';
import { AthenaService } from './athena.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AthenaController],
      providers: [AthenaService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to athena!"', () => {
      const appController = app.get<AthenaController>(AthenaController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to athena!',
      });
    });
  });
});
