import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import {
  ShipmentKerryExpressRequest,
  ShipmentKerryExpressResponse,
} from 'src/types/kerry.type';

@Injectable()
export class KerryRequseter {
  constructor(private readonly httpService: HttpService) {}
  private config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  async shippingExpressOrderInfo(
    data: ShipmentKerryExpressRequest,
  ): Promise<AxiosResponse<ShipmentKerryExpressResponse>> {
    return firstValueFrom(
      this.httpService.post('shipment_info', data, {
        ...this.config,
        baseURL: process.env.KERRY_EXPRESS_URL,
        headers: {
          'Content-type': 'application/json',
          app_id: process.env.KERRY_APP_ID || '',
          app_key: process.env.KERRY_APP_KEY || '',
        },
      }),
    );
  }
}
