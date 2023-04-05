import { Test, TestingModule } from '@nestjs/testing';
import { SubscribesController } from '../controllers/subscribes.controller';
import { SubscribesService } from '../services/subscribes.service';

describe('SubscribesController', () => {
  let controller: SubscribesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscribesController],
      providers: [SubscribesService],
    }).compile();

    controller = module.get<SubscribesController>(SubscribesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
