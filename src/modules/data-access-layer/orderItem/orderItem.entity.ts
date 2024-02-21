import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from '../product/product.entity';

@Entity({ name: 'OrderItem' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  @Index()
  id: number;

  @OneToMany(() => ProductEntity, (item) => item.orderItem)
  products: ProductEntity[];

  @Column({ name: 'Quantity' })
  qty: number;

  @Column({ name: ' Price' })
  price: number;
}
