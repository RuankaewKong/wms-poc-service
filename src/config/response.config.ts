export default {
  SUCCESS: {
    statusCode: 0,
    message: 'Success',
  },
  INVALID_ERP_COMPANY: {
    statusCode: 101,
    message: 'Invalid ERP company code.',
  },
  INVALID_CARRIER: {
    statusCode: 102,
    message: 'Invalid carrier.',
  },
  ORDER_NOT_FOUND: {
    statusCode: 103,
    message: 'Order not found.',
  },
  CANNOT_CANCEL: {
    statusCode: 104,
    message: 'Cannot cancel order.',
  },
  INVALID_RETURN_ORDER_DATA_COURSE: {
    statusCode: 105,
    message: 'Please specific return course.',
  },
  INVALID_RETURN_ORDER_DATA_AMOUNT: {
    statusCode: 105,
    message: 'Please specific new amount.',
  },
  ORDER_ID_REQUIRED: {
    statusCode: 106,
    message: 'Order ID is required.',
  },
  INTERNAL_ERROR: {
    statusCode: 999,
    message: 'INTERNAL ERROR',
  },
  AUTH_ERROR: {
    statusCode: 401,
    message: 'Unauthorized',
  },
};
