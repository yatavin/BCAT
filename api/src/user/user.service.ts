import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserAccessDto } from '../common/dto/user.dto';
import { UserError } from './user.errors';
import { GenericException } from '../common/generic-exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getByExternalId(externalId: string): Promise<User> {
    const user = this.userRepository.findOne({ where: { userGuid: externalId } });
    if (!user) {
      throw new GenericException(UserError.USER_NOT_FOUND);
    }
    return user;
  }

  async getUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new GenericException(UserError.USER_NOT_FOUND);
    }
    return user;
  }

  async addUser(data: Partial<User>): Promise<User> {
    return this.userRepository.save(this.userRepository.create(data));
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.createQueryBuilder().getMany();
  }

  async updateUserAccess(userId: number, body: UserAccessDto, loggedInUser: User): Promise<void> {
    const user = await this.getUser(userId);
    user.lastUpdatedByUserId = loggedInUser.id;
    user.lastUpdatedByUserGuid = loggedInUser.userGuid;
    user.updateConcurrencyControlNumber();
    // Right now only updates isAuthorized and isAdmin, add more in the future as needed.
    await this.userRepository.save({ ...user, ...body });
  }
}
