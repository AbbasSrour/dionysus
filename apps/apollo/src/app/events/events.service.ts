import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EventsService {
  constructor(private readonly logger: Logger) {}
}
