import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDL } from './user.dl';

@Injectable()
export class UserRepository {
  private logger: Logger = new Logger(UserRepository.name);
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUser(condition: FindOneOptions): Promise<UserDL | null> {
    const user = await this.userRepository.findOne(condition);
    return user ? this.toDataLayer(user) : null;
  }

  async getUsers(condition: FindManyOptions): Promise<UserDL[]> {
    const users = await this.userRepository.find(condition);
    return users.map(this.toDataLayer);
  }

  toDataLayer(entity: UserEntity): UserDL {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      createdAt: entity.createAt,
      updatedAt: entity.updateAt,
    };
  }
}
