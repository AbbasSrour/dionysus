import { Test } from '@nestjs/testing';

import { HerculesService } from './hercules.service';

describe('CoeusService', () => {
  let service: HerculesService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HerculesService],
    }).compile();

    service = app.get<HerculesService>(HerculesService);
  });

  describe('getData', () => {
    it('should return "Welcome to hercules!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to hercules!' });
    });
  });
});
