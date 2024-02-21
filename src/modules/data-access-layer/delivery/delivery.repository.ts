import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './delivery.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { OrderDL } from './delivery.dl';

@Injectable()
export class OrderRepository {
  private logger: Logger = new Logger(OrderRepository.name);
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
  ) {}
  async findAll(condition: FindManyOptions<OrderEntity>): Promise<OrderDL[]> {
    const entities = await this.orderRepository.find(condition);
    // this.logger.debug('order', entities);
    return entities.map(this.toDataLayer);
  }

  async findOne(
    condition: FindOneOptions<OrderEntity>,
  ): Promise<OrderDL | null> {
    const entity = await this.orderRepository.findOne(condition);
    return entity ? this.toDataLayer(entity) : null;
  }

  toDataLayer(entity: OrderEntity): OrderDL {
    const addressInfo = entity.addressInfo
      ? {
          id: entity.addressInfo.id,
          name: entity.addressInfo.name,
          street: entity.addressInfo.street,
          district: entity.addressInfo.district,
          city: entity.addressInfo.city,
          province: entity.addressInfo.province,
          postcode: entity.addressInfo.postcode,
          phone: entity.addressInfo.phone,
        }
      : null;

    // let orderItems = null;
    // if (entity.orderItem && entity.orderItem.products) {
    //   orderItems = {
    //     id: entity.orderItem.id,
    //     products: entity.orderItem.products.map((product) => ({
    //       id: product.id,
    //       barcode: product.barcode,
    //       bookNo: product.bookNo,
    //       bookName: product.bookName,
    //     })),
    //     qty: entity.orderItem.qty,
    //     price: entity.orderItem.price,
    //   };
    // }
    return {
      id: entity.id,
      orderId: entity.orderId,
      addressInfo: addressInfo,
      orderItem: entity.orderItem,
      quantity: entity.quantity,
      amount: entity.amount,
      status: entity.status,
      createAt: entity.cerateAt,
      updateAt: entity.updateAt,
      deleteAt: entity.deleteAt,
    };
  }
}
