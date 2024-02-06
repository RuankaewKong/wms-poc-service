export interface ProductDL {
  id?: number;
  image?: string;
  barcode: string;
  bookNo: string;
  bookName: string;
  price: number;
  quantity?: number;
  status?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;
}
