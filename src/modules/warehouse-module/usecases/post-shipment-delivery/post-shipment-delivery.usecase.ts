import { Injectable, Logger } from '@nestjs/common';
import { ShipmentRequest } from './post-shipment-delivery.dto';
import {
  KERRY_ACTION_CODE,
  KERRY_SERVICE_CODE,
  KERRY_TOTOL_PKG,
} from 'src/config/delivery.config';
import {
  ShipmentKerryExpress,
  ShipmentKerryExpressResponse,
} from 'src/types/kerry.type';
import { AddressInfo } from 'src/types/delivery.type';
import { KerryRequseter } from '../../../requestor/http-services/kerry.requestor';
import { WarehouseService } from '../../service/warehouse.service';

@Injectable()
export class WarehouseUsecase {
  [x: string]: any;
  private readonly logger: Logger = new Logger(WarehouseUsecase.name);
  constructor(
    private kerryRequester: KerryRequseter,
    private warehouseService: WarehouseService,
  ) {}

  async sendDelivery(
    deliveryInfo: ShipmentRequest,
  ): Promise<ShipmentKerryExpressResponse> {
    const order = await this.warehouseService.getOrder();
    if (!order) {
      throw new Error('Order not found');
    }
    this.logger.debug('order', order);
    const addressWarehouse: AddressInfo = {
      name: 'WareHouse',
      street: '14/123',
      district: 'Pathum wan',
      city: 'Teatt',
      province: 'Bang kok',
      postcode: '12345',
      phone1: '020000000',
    };
    const expressData: ShipmentKerryExpress = {
      con_no: deliveryInfo.orderId,
      s_name: addressWarehouse.name,
      s_address: `${addressWarehouse.street} ${addressWarehouse.district} ${addressWarehouse.city} ${addressWarehouse.province} ${addressWarehouse.postcode}`,
      s_subdistrict: addressWarehouse.district,
      s_district: addressWarehouse.city,
      s_province: addressWarehouse.province,
      s_zipcode: addressWarehouse.postcode,
      s_mobile1: addressWarehouse.phone1,
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
    // await this.warehouseService.sendToKerry(reqData);
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

  async testSend(
    deliveryInfo: ShipmentRequest,
  ): Promise<ShipmentKerryExpressResponse> {
    const order = await this.warehouseService.getOrderById(
      deliveryInfo.orderId,
    );
    if (!order) {
      throw new Error('Order not found');
    }
    this.logger.debug('order', order);
    const addressWarehouse: AddressInfo = {
      name: 'WareHouse',
      street: '14/123',
      district: 'Pathum wan',
      city: 'Teatt',
      province: 'Bang kok',
      postcode: '12345',
      phone1: '020000000',
    };
    const expressData: ShipmentKerryExpress = {
      con_no: deliveryInfo.orderId,
      s_name: addressWarehouse.name,
      s_address: `${addressWarehouse.street} ${addressWarehouse.district} ${addressWarehouse.city} ${addressWarehouse.province} ${addressWarehouse.postcode}`,
      s_subdistrict: addressWarehouse.district,
      s_district: addressWarehouse.city,
      s_province: addressWarehouse.province,
      s_zipcode: addressWarehouse.postcode,
      s_mobile1: addressWarehouse.phone1,
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
