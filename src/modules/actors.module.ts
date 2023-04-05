import { Actor } from '../entities/actor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ActorsService } from '../services/actors.service';
import { ActorsController } from '../controllers/actors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
