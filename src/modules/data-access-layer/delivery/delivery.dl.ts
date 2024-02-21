import { AddressDL } from '../address/address.dl';
import { OrderItemDL } from '../orderItem/orderItem.dl';

export class OrderDL {
  id: number;
  orderId: string;
  addressInfo: AddressDL;
  orderItem: OrderItemDL;
  quantity: number;
  amount: number;
  status: string;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date;
}
