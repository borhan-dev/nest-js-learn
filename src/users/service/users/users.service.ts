import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  findUsers() {
    return this.userRepository.find();
  }
  createUser(userData: CreateUser) {
    const user = this.userRepository.create(userData);

    return this.userRepository.save(user);
  }

  async updateUser(userData: CreateUser, id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    Object.assign(user, userData);

    return this.userRepository.save(user);
  }
}
