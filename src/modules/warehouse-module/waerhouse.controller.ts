import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Version,
} from '@nestjs/common';
import { WarehouseUsecase } from './usecases/post-shipment-delivery/post-shipment-delivery.usecase';
import { WarehouseService } from './service/warehouse.service';
import { ApiTags } from '@nestjs/swagger';
// import { HttpResponse } from 'src/utils/http-response';
import { ShipmentRequest } from './usecases/post-shipment-delivery/post-shipment-delivery.dto';
import { ShipmentKerryExpressResponse } from 'src/types/kerry.type';
import { LoginRequest, LoginResponse } from './usecases/login/login.dto';
import { LoginUseCase } from './usecases/login/login.usecase';
import { DashboardService } from '../dashboard/service/dashboard.service';

@ApiTags('Shipment Kerry')
@Controller('warehouse')
export class WarehouseController {
  private readonly logger: Logger = new Logger(WarehouseController.name);
  constructor(
    private readonly warehouseProvider: WarehouseUsecase,
    private readonly warehouseServicer: WarehouseService,
    private readonly dashboardService: DashboardService,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Version('1')
  @Post('/login')
  public async login(@Body() req: LoginRequest): Promise<LoginResponse> {
    this.logger.debug(req);
    return this.loginUseCase.login(req);
  }

  @Version('1')
  @Get('/getProduct')
  async getAllProduct() {
    const product = this.warehouseServicer.getProduct();
    return product;
  }

  @Version('1')
  @Get('/getOrder')
  async getAllOrder() {
    const order = this.warehouseServicer.getOrder();
    return order;
  }

  @Version('1')
  @Post('/shipment_order')
  @HttpCode(HttpStatus.OK)
  async shipmentOrder(
    @Body() requset: ShipmentRequest,
  ): Promise<ShipmentKerryExpressResponse> {
    const result = await this.warehouseProvider.sendDelivery(requset);
    return result;
  }

  @Version('1')
  @Get('/dashboard')
  public async getDashboard() {
    return this.warehouseServicer.getDashboard();
  }

  @Version('1')
  @Post('/test')
  @HttpCode(HttpStatus.OK)
  async testShipment(
    @Body() requset: ShipmentRequest,
  ): Promise<ShipmentKerryExpressResponse> {
    const result = await this.warehouseProvider.testSend(requset);
    return result;
  }
}
