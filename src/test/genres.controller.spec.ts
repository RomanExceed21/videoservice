import { Test, TestingModule } from '@nestjs/testing';
import { GenresController } from '../controllers/genres.controller';
import { GenresService } from '../services/genres.service';

describe('GenresController', () => {
  let controller: GenresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenresController],
      providers: [GenresService],
    }).compile();

    controller = module.get<GenresController>(GenresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
