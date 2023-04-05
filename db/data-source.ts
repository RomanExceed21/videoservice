import { UserRole } from '../src/entities/user-role.entity';
import { Actor } from 'src/entities/actor.entity';
import { AgeLimit } from 'src/entities/age-limit.entity';
import { Genre } from 'src/entities/genre.entity';
import { Moovie } from 'src/entities/moovie.entity';
import { Subscribe } from 'src/entities/subscribe.entity';
import { User } from 'src/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'user',
  password: 'postgres',
  database: 'postgres-application',
  entities: [User, Subscribe, Moovie, Genre, Actor, AgeLimit, UserRole],
  migrations: ['dist/db/migrations/*.*'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
