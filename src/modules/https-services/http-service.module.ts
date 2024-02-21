import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DashboardHttpService } from './dashboard-http';
import { DashboardService } from '../dashboard/service/dashboard.service';

@Module({
  imports: [HttpModule],
  providers: [DashboardHttpService, DashboardService],
  exports: [DashboardHttpService, DashboardService],
})
export class HttpServiceModule {}
