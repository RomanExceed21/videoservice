import { AgeLimit } from '../entities/age-limit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AgeLimitService } from '../services/age-limit.service';
import { AgeLimitController } from '../controllers/age-limit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgeLimit])],
  controllers: [AgeLimitController],
  providers: [AgeLimitService],
})
export class AgeLimitModule {}
