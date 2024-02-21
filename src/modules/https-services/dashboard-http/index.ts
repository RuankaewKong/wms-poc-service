import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DashboardHttpService {
  private readonly config: AxiosRequestConfig;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    // this.config = {
    //   baseURL: this.configService.getOrThrow<string>('DASHBOARD_URL'),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
  }

  public async apiFildAll() {
    try {
      const res = await firstValueFrom(
        this.httpService.get(
          'http://localhost:3001/api/v1/dashboard/getMetaData',
        ),
      );
      return res.data;
    } catch (error) {}
  }
}
