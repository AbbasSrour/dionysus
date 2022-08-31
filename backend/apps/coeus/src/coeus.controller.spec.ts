import { Test, TestingModule } from '@nestjs/testing';
import { CoeusController } from './coeus.controller';
import { CoeusService } from './coeus.service';

describe('CoeusController', () => {
  let coeusController: CoeusController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoeusController],
      providers: [CoeusService],
    }).compile();

    coeusController = app.get<CoeusController>(CoeusController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coeusController.getHello()).toBe('Hello World!');
    });
  });
});
