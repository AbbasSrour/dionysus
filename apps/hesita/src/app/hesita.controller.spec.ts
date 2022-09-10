import { Test, TestingModule } from '@nestjs/testing';

import { HesitaController } from './hesita.controller';
import { HesitaService } from './hesita.service';

describe('AthenaController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HesitaController],
      providers: [HesitaService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to hesita!"', () => {
      const appController = app.get<HesitaController>(HesitaController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to hesita!',
      });
    });
  });
});
