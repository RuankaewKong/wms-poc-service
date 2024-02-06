export interface DeliveryOrderWithStaff extends DeliveryOrder {
  staff: string;
}

export interface OrderNoCancelSuccessWithStaff {
  orderId: string;
  staff: string;
}

export interface InvalidCoursesSendWorkplace {
  erpCompany: string;
  orderNo: string;
  invalidCourses: string[];
}
export interface CreateLagacyDeliveryOrder {
  deliveryId: string;
  orderId: string;
  shippingRound: string;
  paymentType: string;
  telephone1: string;
  telephone2?: string;
  shippingCourses: CoursesLagacy[];
  courses: CoursesLagacy[];
  amount: number;
  firstname: string;
  lastname: string;
  postcode: string;
  district: string;
  province: string;
  city: string;
  street: string;
  source: string;
  carrier: string;
  isSplitOrder: boolean;

  // Warning!! It will delete when lagacy delivery deprecate
  address?: string;
  customerNo?: string;
  email?: string;
  //   giftCardAmount?: Nullable<number>;
  receiptNo?: string;
  shopOrderCreateAt?: string;
  shopOrderUpdateAt?: string;
  telephone?: string;
  warehouse?: string;
}

export interface CoursesLagacy {
  bookNoList: string[];
  courseCode: string;
  qtyOrdered: number;
}

// export interface ProgressionStatus {
//   carrierMessage: DeliverySalesOrderDocument['carrierMessage'];
//   carrierStatus: DeliverySalesOrderDocument['carrierStatus'];
//   warehouseMessage: DeliverySalesOrderDocument['warehouseMessage'];
//   warehouseStatus: DeliverySalesOrderDocument['warehouseStatus'];
// }

export interface DefineShortOrderResult {
  deliveryOrderOrigin?: { data: CreateLagacyDeliveryOrder; errMsg: string };
  shortDeliveryOrder?: { data: CreateLagacyDeliveryOrder; errMsg: string };
}

// export type StatusMessage = keyof typeof DeliveryStatus;
// export type StatusCode = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
// export type PayStatus = 'Paid' | 'Unpaid';

export enum PaymentType {
  cod = 'cod',
  billpayment = 'billpayment',
  bankTransfer = 'bankTransfer',
  creditCard = 'creditCard',
}

export enum Carrier {
  flash = 'flash',
  kerry = 'kerry',
}

export enum Warehouse {
  flash = 'Flash Fulfillment',
  kerry = 'Kerry Fulfillment',
}

export interface AddressInfo {
  name: string;
  address?: string;
  street: string;
  district: string;
  city: string;
  province: string;
  postcode: string;
  phone1: string;
  phone2?: string;
}

export interface ItemInfo {
  itemNo: string;
  qty: number;
}
export interface CourseInfo {
  courseCode: string;
  items: ItemInfo[];
  qty: number;
}

export interface ReturnCourseInfo {
  code: string;
  qty: number;
}

export interface ExpressInfo {
  name: string;
  status: string;
}

export interface WarehouseInfo {
  name: string;
  refId: string;
  status: string;
}

export interface DeliveryInfo {
  deliveryNo: string;
  trackingNo: string;
  status: string;
  addressInfo: AddressInfo;
  expressInfo: ExpressInfo;
  warehouseInfo: WarehouseInfo;
  courses: CourseInfo[];
  erpInfo?: ErpInfo;
  source: string;
  isCod: boolean;
  codAmount?: number;
  errorMsg?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDeliveryInfo {
  deliveryNo: string;
  trackingNo: string;
  addressInfo: AddressInfo;
  warehouseName: string;
  expressName: string;
  courses: CourseInfo[];
  codAmount?: number;
}
export interface ErpInfo {
  receiptNo: string;
  errMsg: string;
}
export interface DeliveryOrder {
  orderNo: string;
  deliveryInfo: DeliveryInfo[];
}

export interface PostcodeArea {
  postcode: string;
  merchant: string;
  express: string;
}

export type DeliveryStatusType = 'main' | 'express' | 'warehouse';
export type SplitDeliveryKey =
  | 'availableCourses'
  | 'unavailableCourses'
  | 'invalidCourses';
