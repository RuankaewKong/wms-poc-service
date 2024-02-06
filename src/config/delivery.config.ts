export const DeliveryStatus = {
  CREATED: 1,
  WAITING: 2,
  PENDING: 3,
  SUCCESSED: 4,
  REJECTED: 5,
  FAILED: 6,
  RESEND: 7,
  CANCELED: 8,
  LOST: 9,
  DAMAGE: 10,
  SHORT: 11,
};

export const DeliveryStatusMessage = {
  Flash: {
    SUCCESS_VERIFY: 'SUCCESS_VERIFY',
    WAREHOUSE_RECEIVE: 'WAREHOUSE_RECEIVE',
    SUCCESS_PICK: 'SUCCESS_PICK',
    SUCCESS_PACK: 'SUCCESS_PACK',
    SUCCESS_DELIVER: 'SUCCESS_DELIVER',
  },
};

export const DeliveryOrderStatus = {
  Flash: {
    'Cancel shipping': 110,
    'Wait for activation': 120,
    'Presale order': 121,
    'Wait for allocation warehouse': 130,
    'Sold out': 140,
    'Allocated warehouse': 150,
    'Wait for approval': 160,
    'Failed to get the label': 170,
    'On the Outbound': 180,
    Packed: 190,
    Shipped: 200,
    'Abnormal delivery': 205,
    Rejected: 210,
    Signed: 220,
  },
};

export const KERRY_EXPRESS_RESPONSE_STATUS = {
  'Success Requisition': '000',
  'Log in fail, invalid app_key or app_id': '001',
  "Duplicate Consignment No: , only case action is 'A'": '002',
  'Invalid Recipient Zipcode': '003',
  'Invalid Sender Zipcode': '004',
  'Invalid Service Code': '005',
  'Shipment already picked-up: , cannot update/delete': '006',
  'Action Code Error': '007',
  'Invalid Extra Service': '008',
  'Invalid Invr': '009',
  'Require Information Parameter': '010',
  'Secure code have to be in 6 digits and number only': '011',
  'Unsuccessful Requisition / Undefined error exception, return windows exception message':
    '999',
};

export const KERRY_EXPRESS_DELIVERY_STATUS = {
  'Shipment picked up': '010',
  'Arrived at origin station': '101',
  'Arrived at Hub/Transit station': '102',
  'Arrived at destination station': '103',
  'Out for delivery': '045',
  'Delivery successfully': 'POD',
  'Received at location': 'RCV',
  'Drop-off': '005',
  'Delivery unsuccessful due to Wrong Address': '060.01',
  'Delivery unsuccessful due to Cannot contact via phone': '060.02',
  'Delivery unsuccessful due to Consignee refused the package': '060.03',
  'Delivery unsuccessful due to Customer not in/home, office closed': '060.04',
  'Delivery unsuccessful due to Package damaged': '060.05',
  'Delivery unsuccessful due to Consignee asked to postpone delivery': '060.06',
  'Delivery unsuccessful due to Consignee refused to pay COD': '060.07',
  'Delivery unsuccessful due to change address': '060.08',
  'Delivery unsuccessful due to invalid phone number': '060.09',
  'Recipient enter incorrect PIN': '060.10',
  'Delivery unsuccessful, pending for action': '060.99',
  'On the way to new address': '090',
  'On the way back to shipper': '091',
  'Shipment picked up*': '010.1',
  'Arrived at origin station*': '101.1',
  'Arrived at Hub/Transit station*': '102.1',
  'Arrived at destination station*': '103.1',
  'Out for delivery*': '045.1',
  'Undelivered shipment returns to origin': '112',
  Lost: '113',
  Damage: '114',
  'Delete POD Status': 'DPOD',
  'Delete RCV Status': 'DRCV',
};

export const CARRIER_FLASH_NAME = 'flash';
export const CARRIER_KERRY_NAME = 'kerry';
export const EXPRESS_FLASH_NAME = 'Flash Express';
export const EXPRESS_KERRY_NAME = 'Kerry Express';
export const DEFAULT_EXPRESS_NAME = EXPRESS_FLASH_NAME;
export const KERRY_SERVICE_CODE = 'ND';
export const KERRY_TOTOL_PKG = 1;
export const KERRY_ACTION_CODE = 'A';
export const KERRY_OE_NAME = 'บริษัท ออนดีมานด์ เอ็ดดูเคชั่น จำกัด';
export const KERRY_ADDRESS_NAME =
  '88/171 - 2, หมู่ 15, บางเสาธง บางเสาธง สมุทรปราการ 10570';
export const KERRY_SUBDISTRICT = 'บางเสาธง';
export const KERRY_DISTRICT = 'บางเสาธง';
export const KERRY_PROVINCE = 'สมุทรปราการ';
export const KERRY_ZIPCODE = '10570';
export const KERRY_MOBILE = '0832925732';
