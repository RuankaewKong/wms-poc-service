import { Body, Controller, Post, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExchangeGoogleTokenUsecase } from './usecase/exchange-google-token.usecase';
import { ExchangeTokenDto } from './dto/exchange-token.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly exchangeGoogleTokenUsecase: ExchangeGoogleTokenUsecase,
  ) {}

  @Version('1')
  @Post('/exchange-token/google')
  async exchangeTokenGoogle(@Body() exchangeTokenDto: ExchangeTokenDto) {
    return this.exchangeGoogleTokenUsecase.execute(exchangeTokenDto);
  }
}
