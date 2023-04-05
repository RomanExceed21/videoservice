import { Test, TestingModule } from '@nestjs/testing';
import { MooviesController } from '../controllers/moovies.controller';
import { MooviesService } from '../services/moovies.service';

describe('MooviesController', () => {
  let controller: MooviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MooviesController],
      providers: [MooviesService],
    }).compile();

    controller = module.get<MooviesController>(MooviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
