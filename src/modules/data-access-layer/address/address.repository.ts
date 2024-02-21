import { Injectable, Logger } from '@nestjs/common';
import { AddressEntity } from './address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressDL } from './address.dl';

@Injectable()
export class AddressRepository {
  private logger: Logger = new Logger(AddressRepository.name);
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) {}

  async findAll(): Promise<AddressDL[]> {
    try {
      const entities = await this.addressRepository.find();
      // this.logger.debug('Products:', entities);
      return entities.map(this.toDataLayer);
    } catch (error) {
      this.logger.error('Error occurred while fetching products:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }

  toDataLayer(entity: AddressEntity): AddressDL {
    return {
      id: entity.id,
      name: entity.name,
      street: entity.street,
      district: entity.district,
      city: entity.city,
      province: entity.province,
      postcode: entity.postcode,
      phone: entity.phone,
    };
  }
}
