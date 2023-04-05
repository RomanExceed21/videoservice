import { Moovie } from './moovie.entity';
import { GenreTypes } from '../types/genres.types';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: GenreTypes,
  })
  name: string;

  @ManyToMany(() => Moovie, (moovie) => moovie.genre)
  moovies: Moovie[];

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
