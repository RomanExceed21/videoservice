import { UserRole } from './user-role.entity';
import { Subscribe } from 'src/entities/subscribe.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Subscribe, (subscribe) => subscribe.user)
  @JoinColumn({ name: 'subscribe_id' })
  sibscribe: Subscribe;

  @ManyToOne(() => UserRole, (role) => role.user)
  @JoinColumn({ name: 'role_id' })
  role: UserRole;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column()
  birthday: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
