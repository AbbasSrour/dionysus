import { Test } from '@nestjs/testing';

import { AthenaService } from './athena.service';

describe('AppService', () => {
  let service: AthenaService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AthenaService],
    }).compile();

    service = app.get<AthenaService>(AthenaService);
  });

  describe('getData', () => {
    it('should return "Welcome to athena!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to athena!' });
    });
  });
});
