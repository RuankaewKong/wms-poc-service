export enum KerryCarrierPaymentType {
  Prepaid = '101',
  COD = '102',
  'Exchange Delivery' = '104',
  CCOD = '108',
  '123 Service' = '103',
}

export interface ShippingOrderInfoAPIHeader {
  h01: string;
  h02: string;
  h03: string;
  h04?: string;
}

export interface ShippingOrderInfoDataDetails {
  ssno: string;
  isku: string;
  refcode_01?: string;
  iqty: number;
  unpr: number;
  disc: number;
  netp: number;
  line_no?: 'Y' | 'N';
}

export interface ShippingOrderInfoDataHeader {
  sono: string;
  orno: string;
  trno: string;
  orda: string;
  pyda?: string;
  deda?: string;
  cuna: string;
  rena: string;
  ret1: string;
  ret2?: string;
  rezp: string;
  rad1: string;
  rad2?: string;
  rad3?: string;
  rad4?: string;
  rad5?: string;
  country_code?: string;
  country_name?: string;
  txiv?: string;
  txid?: string;
  bina?: string;
  heof?: string;
  taid?: string;
  bad1?: string;
  bad2?: string;
  bad3?: string;
  dech: number;
  coam: number;
  toam: number;
  tova: number;
  tovb: number;
  type: KerryCarrierPaymentType;
  shty?: 'R' | 'S'; // R:Home; S:Shop
  shco?: '00' | '10' | '12'; // 00: No Delivery; 10: KERRY; 12: KERRY-NONINV
  stno?: string;
  stty?: '00';
  exsp?: 'N' | 'Y'; // N: exchange normal; Y: exchange same time
  exre?: string;
  adco?: string;
  note?: string;
  refo?: string;
  poto?: number;
  pogr?: number;
  pous?: number;
  poua?: number;
  poud?: string;
  brco?: string;
  service_code?: string;
  DataDetails: ShippingOrderInfoDataDetails[];
}

export interface ShippingOrderInfoAPITrailer {
  t01: string;
}

export interface ShippingOrderInfoRequest {
  APIHeader: ShippingOrderInfoAPIHeader;
  DataHeader: ShippingOrderInfoDataHeader;
  APITrailer: ShippingOrderInfoAPITrailer;
}

export interface ShippingOrderInfoResponse {
  Code: string;
  Descp: string;
  Rtn: string;
}

export interface ShipmentKerryExpress {
  con_no: string;
  s_name: string;
  s_address: string;
  s_village?: string;
  s_soi?: string;
  s_road?: string;
  s_subdistrict?: string;
  s_district?: string;
  s_province?: string;
  s_zipcode: string;
  s_mobile1: string;
  s_mobile2?: string;
  s_telephone?: string;
  s_email?: string;
  s_contact?: string;
  r_name: string;
  r_address: string;
  r_village?: string;
  r_soi?: string;
  r_road?: string;
  r_subdistrict?: string;
  r_district?: string;
  r_province?: string;
  r_zipcode: string;
  r_mobile1: string;
  r_mobile2?: string;
  r_telephone?: string;
  r_email?: string;
  r_contact?: string;
  special_note?: string;
  service_code: string;
  tot_pkg: number;
  ref_no?: string;
  action_code: string;
  cod_amount?: number;
  cod_type?: string;
  declare_value?: string;
}

export interface ShipmentKerryExpressRequest {
  req: {
    shipment: ShipmentKerryExpress;
  };
}

export interface ShipmentKerryExpressResponse {
  res: {
    shipment: {
      con_no: string;
      status_code: string;
      status_desc: string;
    };
  };
}

export interface ShipmentKerryExpressUpdateStatus {
  con_no: string;
  status_code: string;
  status_desc: string;
  status_date: string; // format yyyy-MM-dd HH:mm:ss
  update_date: string;
  ref_no: string;
  location: string;
}

export interface ShipmentKerryExpressUpdateStatusRequest {
  req: { status: ShipmentKerryExpressUpdateStatus }[];
}

export interface ShipmentKerryExpressUpdateStatusResponse {
  res: {
    status: {
      status_code: string;
      status_desc: string;
    };
  };
}
