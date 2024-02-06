import { ProductDL } from '../product/product.dl';

export class OrderDL {
  id: number;
  orderId: string;
  // addressInfo: AddressInfo;
  // orderItem: OrderItem;
  quantity: number;
  amount: number;
  status: string;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date;
}

export class OrderItem {
  id?: number;
  product: ProductDL;
  qty: number;
  total: number;
}

export class AddressInfo {
  name: string;
  street: string;
  district: string;
  city: string;
  province: string;
  postcode: string;
  phone: string;
}
