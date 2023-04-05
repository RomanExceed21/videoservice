import { UserRole } from '../entities/user-role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserRolesService } from '../services/user-roles.service';
import { UserRolesController } from '../controllers/user-roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],
  controllers: [UserRolesController],
  providers: [UserRolesService],
  exports: [TypeOrmModule],
})
export class UserRolesModule {}
