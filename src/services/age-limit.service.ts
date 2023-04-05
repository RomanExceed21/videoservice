import { Injectable } from '@nestjs/common';
import { CreateAgeLimitDto } from '../dto/create-age-limit.dto';
import { UpdateAgeLimitDto } from '../dto/update-age-limit.dto';

@Injectable()
export class AgeLimitService {
  create(createAgeLimitDto: CreateAgeLimitDto) {
    return 'This action adds a new ageLimit';
  }

  findAll() {
    return `This action returns all ageLimit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ageLimit`;
  }

  update(id: number, updateAgeLimitDto: UpdateAgeLimitDto) {
    return `This action updates a #${id} ageLimit`;
  }

  remove(id: number) {
    return `This action removes a #${id} ageLimit`;
  }
}
