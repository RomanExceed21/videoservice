import { Moovie } from '../entities/moovie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MooviesService } from '../services/moovies.service';
import { MooviesController } from '../controllers/moovies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Moovie])],
  controllers: [MooviesController],
  providers: [MooviesService],
})
export class MooviesModule {}
