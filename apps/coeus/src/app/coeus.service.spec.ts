import { Test } from '@nestjs/testing';

import { CoeusService } from './coeus.service';

describe('ApolloService', () => {
  let service: CoeusService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CoeusService],
    }).compile();

    service = app.get<CoeusService>(CoeusService);
  });

  describe('getData', () => {
    it('should return "Welcome to coeus!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to coeus!' });
    });
  });
});
