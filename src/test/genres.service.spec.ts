import { Test, TestingModule } from '@nestjs/testing';
import { GenresService } from '../services/genres.service';

describe('GenresService', () => {
  let service: GenresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenresService],
    }).compile();

    service = module.get<GenresService>(GenresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
