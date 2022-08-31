import { Test, TestingModule } from '@nestjs/testing';
import { AthenaController } from './athena.controller';
import { AthenaService } from './athena.service';

describe('AthenaController', () => {
  let athenaController: AthenaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AthenaController],
      providers: [AthenaService],
    }).compile();

    athenaController = app.get<AthenaController>(AthenaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(athenaController.getHello()).toBe('Hello World!');
    });
  });
});
