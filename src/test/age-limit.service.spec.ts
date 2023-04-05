import { Test, TestingModule } from '@nestjs/testing';
import { AgeLimitService } from '../services/age-limit.service';

describe('AgeLimitService', () => {
  let service: AgeLimitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgeLimitService],
    }).compile();

    service = module.get<AgeLimitService>(AgeLimitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
