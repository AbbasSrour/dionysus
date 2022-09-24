import { Test, TestingModule } from '@nestjs/testing';

import { ApolloController } from './apollo.controller';
import { ApolloService } from './apollo.service';

describe('HesitaController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApolloController],
      providers: [ApolloService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to apollo!"', () => {
      const appController = app.get<ApolloController>(ApolloController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to apollo!',
      });
    });
  });
});
