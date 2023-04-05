import { Injectable } from '@nestjs/common';
import { CreateMoovieDto } from '../dto/create-moovie.dto';
import { UpdateMoovieDto } from '../dto/update-moovie.dto';

@Injectable()
export class MooviesService {
  create(createMoovieDto: CreateMoovieDto) {
    return 'This action adds a new moovie';
  }

  findAll() {
    return `This action returns all moovies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moovie`;
  }

  update(id: number, updateMoovieDto: UpdateMoovieDto) {
    return `This action updates a #${id} moovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} moovie`;
  }
}
