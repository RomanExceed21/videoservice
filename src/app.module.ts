import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { MooviesModule } from './modules/moovies.module';
import { ActorsModule } from './modules/actors.module';
import { SubscribesModule } from './modules/subscribes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresModule } from './modules/genres.module';
import { AgeLimitModule } from './modules/age-limit.module';
import { dataSourceOptions } from 'db/data-source';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserRolesModule } from './modules/user-roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    MooviesModule,
    ActorsModule,
    SubscribesModule,
    GenresModule,
    AgeLimitModule,
    UserRolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
