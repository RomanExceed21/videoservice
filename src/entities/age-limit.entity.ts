import { Moovie } from './moovie.entity';
import { OneToMany } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgeLimit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'age_limit' })
  ageLimit: number;

  @Column()
  description: string;

  @OneToMany(() => Moovie, (moovie) => moovie.ageLimit)
  moovie: Moovie[];
}
