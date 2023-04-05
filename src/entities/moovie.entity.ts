import { AgeLimit } from './age-limit.entity';
import { Actor } from './actor.entity';
import { Genre } from './genre.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Moovie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Genre, (genre) => genre.moovies)
  @JoinTable({
    name: 'moovie_id_genre_id',
    joinColumn: {
      name: 'moovie_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'genre_id',
      referencedColumnName: 'id',
    },
  })
  genre: Genre[];

  @Column()
  year: string;

  @Column()
  description: string;

  @Column()
  rate: number;

  @ManyToMany(() => Actor, (actors) => actors)
  @JoinTable({
    name: 'moovie_id_actor_id',
    joinColumn: {
      name: 'moovie_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'actor_id',
      referencedColumnName: 'id',
    },
  })
  actors: Actor[];

  @ManyToOne(() => AgeLimit, (limit) => limit.ageLimit)
  @JoinColumn({ name: 'age_limit' })
  ageLimit: AgeLimit;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
