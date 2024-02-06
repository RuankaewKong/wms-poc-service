import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Address' })
export class AddressEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  @Index()
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'Street' })
  street: string;

  @Column({ name: 'District' })
  district: string;

  @Column({ name: 'City' })
  city: string;

  @Column({ name: 'Province' })
  province: string;

  @Column({ name: 'Postcode' })
  postcode: string;

  @Column({ name: 'Phone' })
  phone: string;
}
