import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItemEntity } from './orderItem.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { OrderItemDL } from './orderItem.dl';

@Injectable()
export class OrderItemRepository {
  private logger: Logger = new Logger(OrderItemRepository.name);

  constructor(
    @InjectRepository(OrderItemEntity)
    private orderItemRepository: Repository<OrderItemEntity>,
  ) {}

  async find(
    condition: FindManyOptions<OrderItemEntity>,
  ): Promise<OrderItemDL[]> {
    const entities = await this.orderItemRepository.find(condition);
    // this.logger.debug('order item', entities);
    return entities.map(this.toDataLayer);
  }

  toDataLayer(entity: OrderItemEntity): OrderItemDL {
    return {
      id: entity.id,
      products: entity.products,
      price: entity.price,
      qty: entity.qty,
    };
  }
}
