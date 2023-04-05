import { SubscribtionType } from '../types/subscribes.types';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/entities/user.entity';

@Entity()
export class Subscribe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: SubscribtionType,
    unique: true,
  })
  type: SubscribtionType;

  @OneToMany(() => User, (user) => user.sibscribe)
  user: User[];

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
  subscribe: User;
}
