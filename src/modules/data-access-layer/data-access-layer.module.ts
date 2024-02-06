import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './address/address.entity';
import { OrderEntity } from './delivery/delivery.entity';
import { OrderItemEntity } from './orderItem/orderItem.entity';
import { ProductEntity } from './product/product.entity';
import { OrderRepository } from './delivery/delivery.repository';
import { ProductRepository } from './product/product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity,
      OrderEntity,
      AddressEntity,
      OrderItemEntity,
    ]),
  ],
  providers: [OrderRepository, ProductRepository],
  exports: [OrderRepository, ProductRepository],
})
export class DataAccessLayerModule {}
