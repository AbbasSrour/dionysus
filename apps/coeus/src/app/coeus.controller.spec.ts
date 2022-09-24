import { Test, TestingModule } from '@nestjs/testing';

import { CoeusController } from './coeus.controller';
import { CoeusService } from './coeus.service';

describe('ApolloController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CoeusController],
      providers: [CoeusService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to coeus!"', () => {
      const appController = app.get<CoeusController>(CoeusController);
      expect(appController.getData()).toEqual({ message: 'Welcome to coeus!' });
    });
  });
});
