import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WarehouseController } from './waerhouse.controller';
import { RequestorModule } from '../requestor/requestor.module';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';
import { WarehouseService } from './service/warehouse.service';
import { WarehouseUsecase } from './usecases/post-shipment-delivery/post-shipment-delivery.usecase';
import { KerryExpressService } from './service/kerry.service';
import { LoginUseCase } from './usecases/login/login.usecase';
import { HttpServiceModule } from '../https-services/http-service.module';

@Module({
  imports: [
    ConfigModule,
    DataAccessLayerModule,
    RequestorModule,
    HttpServiceModule,
  ],
  providers: [
    WarehouseService,
    WarehouseUsecase,
    KerryExpressService,
    LoginUseCase,
  ],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
