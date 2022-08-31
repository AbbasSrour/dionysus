import { Test, TestingModule } from '@nestjs/testing';
import { ApolloController } from './apollo.controller';
import { ApolloService } from './apollo.service';

describe('ApolloController', () => {
  let apolloController: ApolloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApolloController],
      providers: [ApolloService],
    }).compile();

    apolloController = app.get<ApolloController>(ApolloController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apolloController.getHello()).toBe('Hello World!');
    });
  });
});
