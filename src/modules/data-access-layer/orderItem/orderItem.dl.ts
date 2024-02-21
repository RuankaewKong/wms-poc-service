import { ProductItemDL } from '../product/product.dl';

export class OrderItemDL {
  id?: number;
  products: ProductItemDL[];
  price: number;
  qty: number;
  // total: number;
}
