import { Test, TestingModule } from '@nestjs/testing';
import { ActorsController } from '../controllers/actors.controller';
import { ActorsService } from '../services/actors.service';

describe('ActorsController', () => {
  let controller: ActorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActorsController],
      providers: [ActorsService],
    }).compile();

    controller = module.get<ActorsController>(ActorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
