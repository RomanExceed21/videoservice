import { Test, TestingModule } from '@nestjs/testing';
import { MooviesService } from '../services/moovies.service';

describe('MooviesService', () => {
  let service: MooviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MooviesService],
    }).compile();

    service = module.get<MooviesService>(MooviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
