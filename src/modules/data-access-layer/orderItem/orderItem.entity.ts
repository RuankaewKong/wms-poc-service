import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from '../product/product.entity';

@Entity({ name: 'OrderItem' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  @Index()
  id: number;

  @ManyToOne(() => ProductEntity)
  products: ProductEntity;

  @Column({ name: 'Quantity' })
  qty: number;

  @Column({ name: ' Total' })
  total: number;
}
