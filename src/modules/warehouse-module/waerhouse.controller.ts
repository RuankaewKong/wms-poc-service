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

@ApiTags('Shipment Kerry')
@Controller('warehouse')
export class WarehouseController {
  private readonly looger: Logger = new Logger(WarehouseController.name);
  constructor(
    private readonly warehouseProvider: WarehouseUsecase,
    private readonly warehouseServicer: WarehouseService,
  ) {}

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
}
