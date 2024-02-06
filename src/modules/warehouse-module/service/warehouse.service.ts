import { Injectable, Logger } from '@nestjs/common';
import { OrderRepository } from '../../data-access-layer/delivery/delivery.repository';
// import { DeliveryInfo } from 'src/types/delivery.type';
import {
  ShipmentKerryExpress,
  ShipmentKerryExpressResponse,
} from 'src/types/kerry.type';
import {
  KERRY_ACTION_CODE,
  KERRY_SERVICE_CODE,
  KERRY_TOTOL_PKG,
} from 'src/config/delivery.config';
import { KerryRequseter } from 'src/modules/requestor/http-services/kerry.requestor';
import { ProductRepository } from '../../data-access-layer/product/product.repository';
import { ShipmentRequest } from '../usecases/post-shipment-delivery/post-shipment-delivery.dto';
import { WarehouseAddressInfo } from 'src/types/merchant.type';

@Injectable()
export class WarehouseService {
  private readonly logger: Logger = new Logger(WarehouseService.name);
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productRepository: ProductRepository,
    private kerryRequester: KerryRequseter,
  ) {}

  getOrder() {
    const order = this.orderRepository.fineAll();
    return order;
  }
  getProduct() {
    const product = this.productRepository.fineAll();
    return product;
  }

  async sendDeliveryToKerryExpress(
    deliveryInfo: ShipmentRequest,
    address: WarehouseAddressInfo,
  ): Promise<ShipmentKerryExpressResponse | null> {
    const expressData: ShipmentKerryExpress = {
      con_no: deliveryInfo.orderId,
      s_name: address.name,
      s_address: `${address.street} ${address.district} ${address.city} ${address.province} ${address.postcode}`,
      s_subdistrict: address.district,
      s_district: address.city,
      s_province: address.province,
      s_zipcode: address.postcode,
      s_mobile1: address.phone1,
      r_name: deliveryInfo.addressInfo.name,
      r_address: `${deliveryInfo.addressInfo.street} ${deliveryInfo.addressInfo.district} ${deliveryInfo.addressInfo.city} ${deliveryInfo.addressInfo.province} ${deliveryInfo.addressInfo.postcode}`,
      r_subdistrict: deliveryInfo.addressInfo.district,
      r_district: deliveryInfo.addressInfo.city,
      r_province: deliveryInfo.addressInfo.province,
      r_zipcode: deliveryInfo.addressInfo.postcode,
      r_mobile1: deliveryInfo.addressInfo.phone,
      service_code: KERRY_SERVICE_CODE,
      tot_pkg: KERRY_TOTOL_PKG,
      action_code: KERRY_ACTION_CODE,
    };
    const reqData = { req: { shipment: expressData } };
    this.logger.debug(reqData);
    try {
      const result =
        await this.kerryRequester.shippingExpressOrderInfo(reqData);
      this.logger.debug(result.data);
      return result.data;
    } catch (err) {
      this.logger.error(err);
      return null;
    }
  }
}
