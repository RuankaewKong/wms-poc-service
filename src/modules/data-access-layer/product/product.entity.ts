import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItemEntity } from '../orderItem/orderItem.entity';

@Entity({ name: 'Product' })
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  @Index()
  id: number;

  @Column({ name: 'Image' })
  image: string;

  @Column({ name: 'Barcode' })
  barcode: string;

  @Column({ name: 'Book NO.' })
  bookNo: string;

  @Column({ name: 'Book Name' })
  bookName: string;

  @Column({ name: 'Price' })
  price: number;

  @Column({ name: 'Quantity' })
  quantity: number;

  // @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
  // orderItems: OrderItemEntity[];

  @ManyToOne(() => OrderItemEntity)
  orderItem: OrderItemEntity;

  @Column({ name: 'Status' })
  status: string;

  @CreateDateColumn({ name: 'CreateAt' })
  cerateAt: Date;

  @CreateDateColumn({ name: 'UpdateAt' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'DeleteAt' })
  deleteAt: Date;
}
