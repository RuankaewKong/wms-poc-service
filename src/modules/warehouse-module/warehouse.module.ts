import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WarehouseController } from './waerhouse.controller';
import { RequestorModule } from '../requestor/requestor.module';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';
import { WarehouseService } from './service/warehouse.service';
import { WarehouseUsecase } from './usecases/post-shipment-delivery/post-shipment-delivery.usecase';

@Module({
  imports: [ConfigModule, DataAccessLayerModule, RequestorModule],
  providers: [WarehouseService, WarehouseUsecase],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
