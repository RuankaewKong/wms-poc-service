import { Injectable, Logger } from '@nestjs/common';
import { OrderRepository } from '../../data-access-layer/delivery/delivery.repository';
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
import {
  AddressInfo,
  ShipmentRequest,
} from '../usecases/post-shipment-delivery/post-shipment-delivery.dto';
import { ProductRepository } from 'src/modules/data-access-layer/product/product.repository';
import { OrderItemRepository } from 'src/modules/data-access-layer/orderItem/orderItem.repository';
import { AddressRepository } from 'src/modules/data-access-layer/address/address.repository';
import { OrderDL } from 'src/modules/data-access-layer/delivery/delivery.dl';
import { OrderItemDL } from 'src/modules/data-access-layer/orderItem/orderItem.dl';
import { UserRepository } from 'src/modules/data-access-layer/users/user.repository';
import { UserInfo } from 'src/types/login.type';
import { DashboardHttpService } from 'src/modules/https-services/dashboard-http';

@Injectable()
export class WarehouseService {
  private readonly logger: Logger = new Logger(WarehouseService.name);
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productRepository: ProductRepository,
    private readonly orderItemRepository: OrderItemRepository,
    private readonly addressRepository: AddressRepository,
    private readonly userRepository: UserRepository,
    private dashboardHttpService: DashboardHttpService,
    private kerryRequester: KerryRequseter,
  ) {}
  public async getDashboard() {
    return this.dashboardHttpService.apiFildAll();
  }

  async getUserInfo(email: string): Promise<UserInfo | null> {
    const user = await this.userRepository.getUser({ where: { email } });
    return user ? { name: user.name, email: user.email } : null;
  }
  async getOrder(): Promise<OrderDL[]> {
    const order = this.orderRepository.findAll({
      relations: ['addressInfo', 'orderItem', 'orderItem.products'],
      // relations: { addressInfo: true, orderItem: true },
    });
    return order;
  }
  async getOrderById(orderId: string): Promise<OrderDL | null> {
    const result = await this.orderRepository.findOne({
      where: { orderId },
      relations: { addressInfo: true, orderItem: true },
    });
    // this.logger.log(result);
    return result;
  }

  // async sendKerry(): Promise<void>{
  //   const orders = await this.getOrder();
  //   for(const corder of orders){
  //     const data =  this.
  //   }
  // }

  // private formatDataKerry(order: any): ShipmentRequest{
  //   const addressWarehouse: AddressInfo = {
  //     name: 'WareHouse',
  //     street: '14/123',
  //     district: 'Pathum wan',
  //     city: 'Teatt',
  //     province: 'Bang kok',
  //     postcode: '12345',
  //     phone: '020000000',
  //   };
  //   const shipmentRequest: ShipmentRequest = {
  //     con_no: deliveryInfo.orderId,
  //     s_name: addressWarehouse.name,
  //     s_address: `${addressWarehouse.street} ${addressWarehouse.district} ${addressWarehouse.city} ${addressWarehouse.province} ${addressWarehouse.postcode}`,
  //     s_subdistrict: addressWarehouse.district,
  //     s_district: addressWarehouse.city,
  //     s_province: addressWarehouse.province,
  //     s_zipcode: addressWarehouse.postcode,
  //     s_mobile1: addressWarehouse.phone,
  //     r_name: order.addressInfo.name,
  //     r_address: `${order.addressInfo.street} ${order.addressInfo.district} ${order.addressInfo.city} ${order.addressInfo.province}`,
  //     r_zipcode: order.addressInfo.postcode,
  //     r_mobile1: order.addressInfo.phone,
  //     service_code: 'Your Service Code',
  //     id: 0,
  //     orderId: '',
  //     addressInfo: undefined,
  //     quantity: 0,
  //     amount: 0,
  //     phone: '',
  //     status: '',
  //   };
  // }

  getProduct() {
    const product = this.productRepository.findAll();
    return product;
  }

  async getOrderItem(): Promise<OrderItemDL[]> {
    const orderItem = this.orderItemRepository.find({
      relations: { products: true },
    });
    // this.logger.log('orderItem', orderItem);
    return orderItem;
  }

  async sendToKerry(
    orderId: string,
  ): Promise<ShipmentKerryExpressResponse | null> {
    const order: OrderDL | null = await this.getOrderById(orderId);
    // this.logger.debug('order', order);
    if (!order) {
      throw new Error('Order not found');
    }
    const deliveryInfo: ShipmentRequest =
      this.transformOrderToShipmentRequest(order);
    return this.sendDelivery(deliveryInfo);
  }

  transformOrderToShipmentRequest(order: any): ShipmentRequest {
    const shipmentRequest: ShipmentRequest = {
      con_no: order.orderId,
      s_name: 'Your Sender Name', // You need to provide sender name here
      s_address: 'Your Sender Address', // You need to provide sender address here
      s_zipcode: 'Your Sender Zipcode', // You need to provide sender zipcode here
      s_mobile1: 'Your Sender Phone', // You need to provide sender phone here
      r_name: order.addressInfo.name,
      r_address: `${order.addressInfo.street} ${order.addressInfo.district} ${order.addressInfo.city} ${order.addressInfo.province}`,
      r_zipcode: order.addressInfo.postcode,
      r_mobile1: order.addressInfo.phone,
      service_code: 'Your Service Code',
      id: 0,
      orderId: '',
      addressInfo: undefined,
      orderItem: undefined,
      quantity: 0,
      amount: 0,
      phone: '',
      status: '',
    };

    return shipmentRequest;
  }

  async sendDelivery(
    deliveryInfo: ShipmentRequest,
  ): Promise<ShipmentKerryExpressResponse> {
    const addressWarehouse: AddressInfo = {
      name: 'WareHouse',
      street: '14/123',
      district: 'Pathum wan',
      city: 'Teatt',
      province: 'Bang kok',
      postcode: '12345',
      phone: '020000000',
    };
    const expressData: ShipmentKerryExpress = {
      con_no: deliveryInfo.orderId,
      s_name: addressWarehouse.name,
      s_address: `${addressWarehouse.street} ${addressWarehouse.district} ${addressWarehouse.city} ${addressWarehouse.province} ${addressWarehouse.postcode}`,
      s_subdistrict: addressWarehouse.district,
      s_district: addressWarehouse.city,
      s_province: addressWarehouse.province,
      s_zipcode: addressWarehouse.postcode,
      s_mobile1: addressWarehouse.phone,
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
