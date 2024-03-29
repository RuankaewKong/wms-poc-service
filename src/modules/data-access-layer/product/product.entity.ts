import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ name: 'Status' })
  status: string;

  @CreateDateColumn({ name: 'CreateAt' })
  cerateAt: Date;

  @CreateDateColumn({ name: 'UpdateAt' })
  updateAt: Date;

  @Column({ name: 'DeleteAt' })
  deleteAt: Date;
}
