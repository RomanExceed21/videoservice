import { Test, TestingModule } from '@nestjs/testing';
import { AgeLimitController } from '../controllers/age-limit.controller';
import { AgeLimitService } from '../services/age-limit.service';

describe('AgeLimitController', () => {
  let controller: AgeLimitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgeLimitController],
      providers: [AgeLimitService],
    }).compile();

    controller = module.get<AgeLimitController>(AgeLimitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
