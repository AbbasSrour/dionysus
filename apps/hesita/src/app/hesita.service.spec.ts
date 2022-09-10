import { Test } from '@nestjs/testing';

import { HesitaService } from './hesita.service';

describe('AthenaService', () => {
  let service: HesitaService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HesitaService],
    }).compile();

    service = app.get<HesitaService>(HesitaService);
  });

  describe('getData', () => {
    it('should return "Welcome to hesita!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to hesita!' });
    });
  });
});
