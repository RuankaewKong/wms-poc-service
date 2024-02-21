import { Injectable, Logger } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './login.dto';
import { WarehouseService } from '../../service/warehouse.service';

@Injectable()
export class LoginUseCase {
  private readonly logger: Logger = new Logger(LoginUseCase.name);
  constructor(private readonly warehouseServicer: WarehouseService) {}

  public async login(login: LoginRequest): Promise<LoginResponse> {
    this.logger.debug(login);

    const userInfo = await this.warehouseServicer.getUserInfo(login.email);
    if (!userInfo) {
      return {
        status: 100,
        message: 'Error',
        email: '',
      };
    }
    return { status: 0, message: 'Success', email: userInfo.email };
  }
}
