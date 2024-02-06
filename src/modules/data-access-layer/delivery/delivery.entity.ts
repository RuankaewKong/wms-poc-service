import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItemEntity } from '../orderItem/orderItem.entity';
import { AddressEntity } from '../address/address.entity';

@Entity({ name: 'Order' })
export class OrderEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  @Index()
  id: number;

  @Column({ name: 'OrderId' })
  orderId: string;

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  addressInfo: AddressEntity;

  @OneToOne(() => OrderItemEntity)
  @JoinColumn()
  orderItem: OrderItemEntity;

  @Column({ name: 'Quantity' })
  quantity: number;

  @Column({ name: 'Amount' })
  amount: number;

  @Column({ name: 'Tag' })
  tag: string;

  @Column({ name: 'Status' })
  status: string;

  @CreateDateColumn({ name: 'CreateAt' })
  cerateAt: Date;

  @CreateDateColumn({ name: 'UpdateAt' })
  updateAt: Date;

  @CreateDateColumn({ name: 'DeleteAt' })
  deleteAt: Date;
}
