import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AddressEntity } from 'src/modules/data-access-layer/address/address.entity';
import { OrderEntity } from 'src/modules/data-access-layer/delivery/delivery.entity';
import { OrderItemEntity } from 'src/modules/data-access-layer/orderItem/orderItem.entity';
import { ProductEntity } from 'src/modules/data-access-layer/product/product.entity';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      synchronize: this.configService.get<boolean>('DB_SYNC'),
      database: 'point-engine-intern',
      entities: [ProductEntity, OrderEntity, AddressEntity, OrderItemEntity],
    } as TypeOrmModuleOptions;
  }
}
