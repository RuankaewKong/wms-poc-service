import { Injectable, Logger } from '@nestjs/common';
import { KerryRequseter } from 'src/modules/requestor/http-services/kerry.requestor';

@Injectable()
export class KerryExpressService {
  private readonly logger: Logger = new Logger(KerryExpressService.name);
  constructor(private kerryRequester: KerryRequseter) {}
}
