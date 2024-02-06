import { ReturnCourseInfo } from 'src/types/delivery.type';

export interface ShipmentRequest {
  id: number;
  orderId: string;
  addressInfo: AddressInfo;
  quantity: number;
  amount: number;
  phone: string;
  status: string;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}

export interface ShipmentLEResponse {
  totalShipment: number;
  successShipment: number;
  errorShipment: number;
  errorShipmentList: string[];
}

export interface ShipmentLERequest {
  source: string;
  carrier: string;
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

export interface ShipmentRequest {
  con_no: string;
  s_name: string;
  s_address: string;
  s_zipcode: string;
  s_mobile1: string;
  r_name: string;
  r_address: string;
  r_zipcode: string;
  r_mobile1: string;
  service_code: string;
}

// UpdateShipment Interface
export interface ShipmentOrderConfirmation {
  APIHeader: ShipmentOrderConfirmationAPIHeader;
  DataHeader: ShipmentOrderConfirmationDataHeader[];
  APITrailer: ShipmentOrderConfirmationAPITrailer;
}

interface ShipmentOrderConfirmationAPIHeader {
  h01: string; //username
  h02: string; //password
  h03: string; //filecode
  h04: string; //file_sequence
}

interface ShipmentOrderConfirmationDataHeader {
  sono: string; //shippingOrderNumber
  coco: string; //confirmCode
  tain: string; //taxInvoiceNumber
  taid: string; //taxInvoiceDate
  shno: string; //shipNumber
  trno: string; //trackingNumber
  coda: string; //confirmDate
  boxa: string; //boxQuantity
}

interface ShipmentOrderConfirmationAPITrailer {
  t01: string; //totalRecord
}

// shipmentOrderConfirmationResponse
export interface ShipmentOrderConfirmationResponse {
  ResponseInfoCls: ResponseInfoCls;
}

interface ResponseInfoCls {
  Rtn: number;
  Code: string;
  Descp: string;
}

export interface CancelShipmentRequest {
  orderId: string;
  type: 'void' | 'return';
  staff: string;
  returnCourse?: ReturnCourseInfo[];
  newAmount?: number;
}

export interface CancelShipmentResponse {
  cancelSuccess: string[];
  cancelError: string[];
}
