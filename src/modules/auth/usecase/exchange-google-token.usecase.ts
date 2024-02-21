import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { GoogleOauth } from '../services/google-oauth.service';
import { UserService } from '../services/user.service';
import { JwtService } from '@nestjs/jwt';
import { ExchangeTokenDto } from '../dto/exchange-token.dto';
import { ExchangeTokenResponse } from '../types/exchange-token-response.type';

@Injectable()
export class ExchangeGoogleTokenUsecase {
  private readonly logger: Logger = new Logger(ExchangeGoogleTokenUsecase.name);

  constructor(
    private readonly googleOauth: GoogleOauth,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async execute({ idToken }: ExchangeTokenDto): Promise<ExchangeTokenResponse> {
    const { email } = await this.googleOauth.verifyIdToken(idToken);
    if (!email) throw new UnauthorizedException();

    const user = await this.userService.getUserInfo(email);
    if (!user) throw new UnauthorizedException();

    return {
      staffProfile: user,
      accessToken: await this.jwtService.signAsync(user),
    };
  }
}
