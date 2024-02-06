import { ProductResponse } from '../get-wms-products/product.interface';

export interface OrderRequset {}

export interface OrderResponse {
  id: number;
  orderId: string;
  addressInfo: AddressInfo;
  // orderItem: OrderItem[];
  quantity: number;
  amount: number;
  phone: string;
  status: string;
  createAt: string;
  updateAt: string;
  deleteAt: string;
}

export interface OrderItem {
  id?: number;
  product: ProductResponse[];
  price: number;
  qty: number;
  total: number;
}

export interface AddressInfo {
  name: string;
  street: string;
  district: string;
  city: string;
  province: string;
  postcode: string;
  phone: string;
}
