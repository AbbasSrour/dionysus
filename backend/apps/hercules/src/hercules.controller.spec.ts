import { Test, TestingModule } from '@nestjs/testing';
import { HerculesController } from './hercules.controller';
import { HerculesService } from './hercules.service';

describe('HerculesController', () => {
  let herculesController: HerculesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HerculesController],
      providers: [HerculesService],
    }).compile();

    herculesController = app.get<HerculesController>(HerculesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(herculesController.getHello()).toBe('Hello World!');
    });
  });
});
