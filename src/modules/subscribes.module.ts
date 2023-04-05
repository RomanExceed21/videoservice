import { Module } from '@nestjs/common';
import { SubscribesService } from '../services/subscribes.service';
import { SubscribesController } from '../controllers/subscribes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscribe } from '../entities/subscribe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscribe])],
  controllers: [SubscribesController],
  providers: [SubscribesService],
  exports: [TypeOrmModule],
})
export class SubscribesModule {}
