import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './address/address.entity';
import { OrderEntity } from './delivery/delivery.entity';
import { OrderItemEntity } from './orderItem/orderItem.entity';
// import { ProductEntity } from './product/product.entity';
import { OrderRepository } from './delivery/delivery.repository';
// import { ProductRepository } from './product/product.repository';
import { OrderItemRepository } from './orderItem/orderItem.repository';
import { ProductRepository } from './product/product.repository';
import { ProductEntity } from './product/product.entity';
import { AddressRepository } from './address/address.repository';
import { UserEntity } from './users/user.entity';
import { UserRepository } from './users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      AddressEntity,
      OrderItemEntity,
      ProductEntity,
      UserEntity,
    ]),
  ],
  providers: [
    OrderRepository,
    OrderItemRepository,
    ProductRepository,
    AddressRepository,
    UserRepository,
  ],
  exports: [
    OrderRepository,
    OrderItemRepository,
    ProductRepository,
    AddressRepository,
    UserRepository,
  ],
})
export class DataAccessLayerModule {}
