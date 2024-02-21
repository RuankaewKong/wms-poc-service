import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from 'src/modules/data-access-layer/users/user.repository';
import { UserInfo } from 'src/types/login.type';

@Injectable()
export class UserService {
  private readonly logger: Logger = new Logger(UserService.name);
  constructor(private readonly userRepository: UserRepository) {}

  async getUserInfo(email: string): Promise<UserInfo | null> {
    const user = await this.userRepository.getUser({
      where: { email },
    });
    if (!user) return null;

    return {
      name: user.name,
      email: user.email,
    };
  }
}
