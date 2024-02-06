import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { KerryRequseter } from './http-services/kerry.requestor';

@Module({
  imports: [HttpModule],
  providers: [KerryRequseter],
  exports: [KerryRequseter],
})
export class RequestorModule {}
