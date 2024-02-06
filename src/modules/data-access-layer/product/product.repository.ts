import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { ProductDL } from './product.dl';

@Injectable()
export class ProductRepository {
  private logger: Logger = new Logger(ProductRepository.name);
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}
  async fineAll(): Promise<ProductDL[]> {
    const entities = await this.productRepository.find();
    return entities.map(this.toDataLayer);
  }
  toDataLayer(entity: ProductEntity): ProductDL {
    return {
      id: entity.id,
      image: entity.image,
      barcode: entity.barcode,
      bookNo: entity.bookNo,
      bookName: entity.status,
      price: entity.price,
      quantity: entity.quantity,
      status: entity.status,
      createAt: entity.cerateAt,
      updateAt: entity.updateAt,
      deleteAt: entity.deleteAt,
    };
  }
}
