import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDL } from './product.dl';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private logger: Logger = new Logger(ProductRepository.name);
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<ProductDL[]> {
    try {
      const entities = await this.productRepository.find();
      // this.logger.debug('Products:', entities);
      return entities.map(this.toDataLayer);
    } catch (error) {
      this.logger.error('Error occurred while fetching products:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }

  toDataLayer(entity: ProductEntity): ProductDL {
    return {
      id: entity.id,
      image: entity.image,
      barcode: entity.barcode,
      bookNo: entity.bookNo,
      bookName: entity.bookName,
      price: entity.price,
      quantity: entity.quantity,
      status: entity.status,
      createAt: entity.cerateAt,
      updateAt: entity.updateAt,
      deleteAt: entity.deleteAt,
    };
  }
}
