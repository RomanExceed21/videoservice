import { UserRole } from './../entities/user-role.entity';
import { Subscribe } from './../entities/subscribe.entity';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Subscribe)
    private subscribeRepository: Repository<Subscribe>,

    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  async login(createUserDto: CreateUserDto): Promise<User> {
    const subscribe = await this.subscribeRepository
      .createQueryBuilder('subscribe')
      .where('subscribe.type = :type', { type: 'guest' })
      .getOne();

    const userRole = await this.userRoleRepository
      .createQueryBuilder('role')
      .where('role.type = :type', { type: 'user' })
      .getOne();

    const user = this.userRepository.create();
    user.sibscribe = subscribe;
    user.role = userRole;
    await this.userRepository.save(user);

    await this.userRoleRepository
      .createQueryBuilder('roles')
      .leftJoinAndSelect('roles.user', 'users')
      .getMany()
      .then((data) => console.log(data));

    return user;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.createQueryBuilder('user').getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
