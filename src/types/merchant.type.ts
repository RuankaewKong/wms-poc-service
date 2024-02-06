import { AddressInfo } from './delivery.type';

export interface WarehouseAddressInfo extends AddressInfo {
  carrier: string;
  warehouseId: string;
  storeCode: string;
}

export interface Merchant {
  user: string;
  erpCompany: string;
  warehouse: WarehouseAddressInfo;
  trackingNoPrefix: string;
}
