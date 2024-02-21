import { Injectable } from '@nestjs/common';
import { DashboardHttpService } from 'src/modules/https-services/dashboard-http';

@Injectable()
export class DashboardService {
  constructor(private readonly dashboardHttpService: DashboardHttpService) {}

  // public async getData(): Promise<any> {
  //   const data = await this.dashboardHttpService.getMetaData();
  //   return data;
  // }
}
