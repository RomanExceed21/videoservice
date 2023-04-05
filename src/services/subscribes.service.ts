import { Subscribe } from 'src/entities/subscribe.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubscribeDto } from '../dto/create-subscribe.dto';
import { UpdateSubscribeDto } from '../dto/update-subscribe.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SubscribesService {
  constructor(
    @InjectRepository(Subscribe)
    private subscribeRepository: Repository<Subscribe>,
  ) {}
  create(createSubscribeDto: CreateSubscribeDto) {
    return this.subscribeRepository.save(createSubscribeDto);
  }

  findAll() {
    return `This action returns all subscribes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscribe`;
  }

  update(id: number, updateSubscribeDto: UpdateSubscribeDto) {
    return `This action updates a #${id} subscribe`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscribe`;
  }
}
