import { Test, TestingModule } from '@nestjs/testing';
import { HesitaController } from './hesita.controller';
import { HesitaService } from './hesita.service';

describe('HesitaController', () => {
  let hesitaController: HesitaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HesitaController],
      providers: [HesitaService],
    }).compile();

    hesitaController = app.get<HesitaController>(HesitaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hesitaController.getHello()).toBe('Hello World!');
    });
  });
});
