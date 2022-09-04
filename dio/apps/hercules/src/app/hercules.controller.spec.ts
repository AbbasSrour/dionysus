import { Test, TestingModule } from '@nestjs/testing';

import { HerculesController } from './hercules.controller';
import { HerculesService } from './hercules.service';

describe('CoeusController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HerculesController],
      providers: [HerculesService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to hercules!"', () => {
      const appController = app.get<HerculesController>(HerculesController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to hercules!',
      });
    });
  });
});
