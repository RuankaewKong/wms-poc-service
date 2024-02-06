import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './delivery.entity';
import { Repository } from 'typeorm';
import { OrderDL } from './delivery.dl';

@Injectable()
export class OrderRepository {
  private logger: Logger = new Logger(OrderRepository.name);
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
  ) {}
  async fineAll(): Promise<OrderDL[]> {
    const entities = await this.orderRepository.find();
    return entities.map(this.toDataLayer);
  }
  toDataLayer(entity: OrderEntity): OrderDL {
    return {
      id: entity.id,
      orderId: entity.orderId,
      quantity: entity.quantity,
      amount: entity.amount,
      status: entity.status,
      createAt: entity.cerateAt,
      updateAt: entity.updateAt,
      deleteAt: entity.deleteAt,
    };
  }
}
