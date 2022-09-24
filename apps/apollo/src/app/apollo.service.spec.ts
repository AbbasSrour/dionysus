import { Test } from '@nestjs/testing';

import { ApolloService } from './apollo.service';

describe('HesitaService', () => {
  let service: ApolloService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ApolloService],
    }).compile();

    service = app.get<ApolloService>(ApolloService);
  });

  describe('getData', () => {
    it('should return "Welcome to apollo!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to apollo!' });
    });
  });
});
